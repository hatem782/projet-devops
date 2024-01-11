describe("tasks", () => {
  it("successfully retrieves all tasks", () => {
    cy.request("GET", "http://localhost:8080/api/get-all-tasks").should(
      (response) => {
        expect(response.status).to.eq(200);

        // Check if the response body has the expected structure
        expect(response.body).to.have.property("success", true);
        expect(response.body).to.have.property(
          "message",
          "Successfully retrieved all tasks."
        );
        expect(response.body).to.have.property("data");

        // Assuming 'data' is an array
        expect(response.body.data).to.be.an("array");

        // Add more assertions as needed based on your response structure
      }
    );
  });
  let savedTask = {};
  it("successfully creates a task", () => {
    const taskData = {
      title: "Test Task",
      color: "blue",
    };

    cy.request("POST", "http://localhost:8080/api/create", taskData).should(
      (response) => {
        expect(response.status).to.eq(201);

        // Check if the response body has the expected structure
        expect(response.body).to.have.property("success", true);
        expect(response.body).to.have.property(
          "message",
          "Successfully created a task."
        );
        expect(response.body).to.have.property("data");

        // Assuming 'data' is an object representing the created task
        expect(response.body.data).to.be.an("object");
        expect(response.body.data).to.have.property("title", taskData.title);
        expect(response.body.data).to.have.property("color", taskData.color);
        expect(response.body.data).to.have.property("completed", false);
        savedTask = response.body.data;

        // Add more assertions as needed based on your response structure
      }
    );
  });

  it("test if task added exist ", () => {
    cy.request({
      method: "Get",
      url: "http://localhost:8080/api/get-all-tasks",
    }).then((response) => {
      expect(response.status).to.eq(200);
      //check the response type and length
      const tasks = response.body.data;
      const task = tasks.find((t) => t._id == savedTask._id);
      expect(task).to.exist;
    });
  });

  it("should mark a task as done and then undone", () => {
    // Assuming savedTask is defined elsewhere in your test
    const taskId = savedTask._id;

    // Mark the task as done
    cy.request(
      "PUT",
      `http://localhost:8080/api/done-undone-task/${taskId}`
    ).should((response) => {
      expect(response.status).to.eq(200);

      // Check the response body for the updated task
      const updatedTask = response.body.data;
      expect(updatedTask).to.exist;
      expect(updatedTask._id).to.eq(taskId);
      expect(updatedTask.completed).to.be.true;
    });

    // Mark the task as undone
    cy.request(
      "PUT",
      `http://localhost:8080/api/done-undone-task/${taskId}`
    ).should((response) => {
      expect(response.status).to.eq(200);

      // Check the response body for the updated task
      const updatedTask = response.body.data;
      expect(updatedTask).to.exist;
      expect(updatedTask._id).to.eq(taskId);
      expect(updatedTask.completed).to.be.false;
    });
  });

  it("returns an error for incomplete task data", () => {
    const incompleteTaskData = {
      // Missing 'color' field
      title: "Incomplete Task",
    };

    cy.request({
      method: "POST",
      url: "http://localhost:8080/api/create",
      body: incompleteTaskData,
      failOnStatusCode: false, // Allow the request to fail
    }).should((response) => {
      expect(response.status).to.eq(400);

      // Check if the response body has the expected error structure
      expect(response.body).to.have.property("success", false);
      expect(response.body).to.have.property(
        "message",
        "Please provide a title and color."
      );

      // Ensure that 'data' property is not present in the error response
      expect(response.body).to.not.have.property("data");
    });
  });

  let savedTaskUpdate = {};
  it("should update task", () => {
    const data = {
      title: "Updated Task Title",
      color: "green",
    };
    cy.request({
      method: "PUT",
      url: `http://localhost:8080/api/update/` + savedTask._id,
      body: data,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.title).to.eq(data.title);
      expect(response.body.data.color).to.eq(data.color);
      savedTaskUpdate = response.body.data;
    });
  });

  it("test if task updated sucess ", () => {
    cy.request({
      method: "Get",
      url: "http://localhost:8080/api/get-all-tasks",
    }).then((response) => {
      expect(response.status).to.eq(200);
      //check the response type and length
      const tasks = response.body.data;
      const task = tasks.find((t) => t._id == savedTaskUpdate._id);
      expect(task).to.exist;
    });
  });

  it("should delet task added", () => {
    cy.request({
      method: "Delete",
      url: "http://localhost:8080/api/delete/" + savedTaskUpdate._id,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
