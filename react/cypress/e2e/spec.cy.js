/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

describe("Cypress Test", () => {
  // describe("CONNECT AS SUPERADMIN", () => {
  //   it("sigin in successfully as SUPERADMIN", () => {
  //     cy.visit("/");
  //     cy.location("pathname").should("eq", "/login");
  //     cy.getByData("userName").type("58217520");
  //     cy.getByData("password").type("58217520");
  //     cy.getByData("connectButton").click();
  //     cy.location("pathname").should("eq", "/dash/main");
  //     cy.window().then((win) => {
  //       const token = win.localStorage.getItem("isamm_token");
  //       expect(token).not.to.be.null;
  //     });
  //     cy.window().then((win) => {
  //       const token = win.localStorage.getItem("isamm_ref_token");
  //       expect(token).not.to.be.null;
  //     });
  //     cy.getUserByToken().then((response) => {
  //       const user = response.body.data;
  //       console.log(response);
  //       expect(user.role).to.be.eq("SUPERADMIN");
  //     });
  //   });
  // });

  describe("Test Website cellinnov", () => {
    beforeEach(() => {
      cy.visit("https://cellinnov.com/checkout");
    });

    it("Make Test On Cellinnov", () => {
      // cy.location("pathname").should("eq", "https://cellinnov.com/checkout");
      cy.get("#acceptCgv").click().should("be.checked");
      cy.get("#acceptCgs").click().should("be.checked");
      cy.get(".alert").should("be.visible");

      cy.get("#billingEmail").type("hatembenechikh100@gmail.com");
      cy.get("#billingEmailConfirm").type("hatembenechikh100@gmail.com");
      cy.get(".billingGender > select").select("Mme.");
      cy.get("#billingFirstName").type("Hatem");
      cy.get("#billingLastName").type("Benechikh");
      cy.get("#billingPhoneNumber").type("58217529");
      cy.get("#billingStreet3").type("Ariana");
      cy.get("#billingStreet1").type("Ariana");
      cy.get("#billingStreet2").type("Ariana");
      cy.get("#billingStreet4").type("Ariana");
      cy.get("#billingZipCode").type("5020");
      cy.get("#billingCity").type("Tunis");
      cy.get(".billingCountry > select").select("Chine");

      cy.get(".loading").should("be.visible");
      cy.get("#acceptCgs").click().should("be.not.checked");
      cy.get(".loading").should("be.not.exist");
    });
  });

  // describe("Student Add PFE", () => {
  //   beforeEach(() => {
  //     cy.fixture("student.json").then((data) => {
  //       studentData = data.student;
  //       cy.clearToken();
  //       cy.connect_with_phone(studentData.phoneNumber);
  //     });

  //     cy.fixture("pfe.json").then((data) => {
  //       pfeData = data.pfe;
  //     });

  //     cy.visit("/dash/student_my_pfes");
  //   });

  //   it("ADD NEW PFE", () => {
  //     cy.location("pathname").should("eq", "/dash/student_my_pfes");
  //     cy.getByData("add-pfe").click();
  //     cy.getByData("modal").should("be.visible");

  //     cy.getByName("title").type(pfeData.title);
  //     cy.getByData("description").type(pfeData.description);
  //     cy.getByName("societe").type(pfeData.societe);
  //     cy.getByName("pays").type(pfeData.pays);

  //     cy.getByName("startDate").typeDate(pfeData.startDate);
  //     cy.getByName("endDate").typeDate(pfeData.endDate);

  //     cy.getByData("promotion").click();
  //     cy.getByData("option-4").click();

  //     cy.getByData("add-tech").click();
  //     cy.getByData("tech-0").type(`${pfeData.technologies[0]}{enter}`);

  //     cy.getByData("add-tech").click();
  //     cy.getByData("tech-1").type(`${pfeData.technologies[1]}{enter}`);

  //     cy.getByData("add-tech").click();
  //     cy.getByData("tech-2").type(`${pfeData.technologies[2]}{enter}`);

  //     cy.getByData("Ajouter").click();

  //     cy.contains("PFE created successfully").should("be.exist");
  //     cy.getByData("modal").should("not.exist");
  //   });

  //   it("ADD PFE EXIST", () => {
  //     cy.location("pathname").should("eq", "/dash/student_my_pfes");
  //     cy.getByData("add-pfe").click();
  //     cy.getByData("modal").should("be.visible");

  //     cy.getByName("title").type(pfeData.title);
  //     cy.getByData("description").type(pfeData.description);
  //     cy.getByName("societe").type(pfeData.societe);
  //     cy.getByName("pays").type(pfeData.pays);

  //     cy.getByName("startDate").typeDate(pfeData.startDate);
  //     cy.getByName("endDate").typeDate(pfeData.endDate);

  //     cy.getByData("promotion").click();
  //     cy.getByData("option-4").click();

  //     cy.getByData("add-tech").click();
  //     cy.getByData("tech-0").type(`${pfeData.technologies[0]}{enter}`);

  //     cy.getByData("add-tech").click();
  //     cy.getByData("tech-1").type(`${pfeData.technologies[1]}{enter}`);

  //     cy.getByData("add-tech").click();
  //     cy.getByData("tech-2").type(`${pfeData.technologies[2]}{enter}`);

  //     cy.getByData("add-tech").click();
  //     cy.getByData("tech-3").type(`${"to_be_deleted"}{enter}`);
  //     cy.getByData("del-tech-3").click();

  //     cy.getByData("Ajouter").click();

  //     cy.contains(
  //       "You already created a PFE for this promotion, update it"
  //     ).should("be.exist");
  //     cy.getByData("Annuler").click();
  //     cy.getByData("modal").should("not.exist");
  //   });
  // });

  // describe("Teacher Approve PFE", () => {
  //   beforeEach(() => {
  //     cy.fixture("student.json").then((data) => {
  //       studentData = data.student;
  //       cy.clearToken();
  //       cy.connect_as_teacher();
  //     });

  //     cy.fixture("pfe.json").then((data) => {
  //       pfeData = data.pfe;
  //     });

  //     cy.visit("/dash/approve_pfe");
  //   });

  //   it("Approve PFE", () => {
  //     cy.location("pathname").should("eq", "/dash/approve_pfe");
  //     cy.wait(5000);
  //     cy.getByData(
  //       `btn-choose-${pfeData.title.toLocaleLowerCase().split(" ").join("-")}`
  //     ).click();
  //     cy.getByData("modal").should("be.visible");
  //     cy.getByData("choisir").click();
  //     cy.getByData("modal").should("not.exist");
  //     cy.getByData(
  //       `btn-choose-${pfeData.title.toLocaleLowerCase().split(" ").join("-")}`
  //     ).should("not.exist");
  //   });
  // });

  // describe("Admin Approve PFE", () => {
  //   beforeEach(() => {
  //     cy.fixture("student.json").then((data) => {
  //       studentData = data.student;
  //       cy.clearToken();
  //       cy.connect_as_superadmin();
  //     });

  //     cy.fixture("pfe.json").then((data) => {
  //       pfeData = data.pfe;
  //     });

  //     cy.visit("/dash/admin_projects");
  //   });

  //   it("Approve PFE By Admin", () => {
  //     cy.location("pathname").should("eq", "/dash/admin_projects");
  //     cy.wait(5000);
  //     cy.getByData(
  //       `btn-choose-${pfeData.title.toLocaleLowerCase().split(" ").join("-")}`
  //     ).click();

  //     cy.getByData("modal").should("be.visible");
  //     cy.getByName("note").type("16");
  //     cy.getByData("Valider").click();
  //     cy.getByData("modal").should("not.exist");
  //     cy.getByData(
  //       `btn-choose-${pfeData.title.toLocaleLowerCase().split(" ").join("-")}`
  //     ).should("not.exist");
  //   });
  // });

  // describe("Student Delete PFE", () => {
  //   beforeEach(() => {
  //     cy.fixture("student.json").then((data) => {
  //       studentData = data.student;
  //       cy.clearToken();
  //       cy.connect_with_phone(studentData.phoneNumber);
  //     });

  //     cy.fixture("pfe.json").then((data) => {
  //       pfeData = data.pfe;
  //     });

  //     cy.visit("/dash/student_my_pfes");
  //   });

  //   it("Delete PFE", () => {
  //     cy.location("pathname").should("eq", "/dash/student_my_pfes");
  //     cy.getByData(
  //       `btn-delete-${pfeData.title.toLocaleLowerCase().split(" ").join("-")}`
  //     ).click();
  //     cy.getByData("modal").should("be.visible");
  //     cy.getByData("delete").click();
  //   });
  // });

  // describe("Admin Delete Student", () => {
  //   beforeEach(() => {
  //     cy.fixture("student.json").then((data) => {
  //       studentData = data.student;
  //       cy.clearToken();
  //       cy.connect_as_superadmin();
  //     });

  //     cy.fixture("pfe.json").then((data) => {
  //       pfeData = data.pfe;
  //     });

  //     cy.visit("/dash/gest_students");
  //   });

  //   it("Delete Student", () => {
  //     cy.location("pathname").should("eq", "/dash/gest_students");
  //     cy.getByData(`btn-delete-${studentData.phoneNumber}`).click();
  //     cy.getByData("modal").should("be.visible");
  //     cy.getByData("delete").click();
  //   });
  // });
});
