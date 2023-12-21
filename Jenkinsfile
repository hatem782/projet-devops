pipeline {
    agent any
    
    environment {
        // Define any environment variables needed for the pipeline
        MY_VARIABLE = 'some value'
    }

    stages {
        stage('Build') {
            when {
                // Stage only triggered when a merge request is created
                expression { currentBuild.changeSets.size() > 0 && env.BRANCH_NAME == 'refs/heads/Develop' }
            }
            steps {
                // Stage 1 Build: Compile and build the app
                
                script {

                // withCredentials([usernamePassword(credentialsId: 'projet-devops', usernameVariable: 'hatem782', passwordVariable: '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')]) {
                //     // Your build steps using credentials
                //     echo "GitHub Username: ${GITHUB_USERNAME}"
                //     echo "GitHub Password: ${GITHUB_PASSWORD}"
                // }

                    echo 'Compiling and building the app...'
                    sh 'docker-compose up -d --build'
                }
            }
        }

    //     stage('Unit Test') {
    //         when {
    //             // Stage only triggered when a merge request is created
    //             expression { currentBuild.changeSets.size() > 0 }
    //         }
    //         steps {
    //             // Stage 2 Unit Test: Run the unit tests
    //             script {
    //                 echo 'Running unit tests...'
    //                 // Add your unit test commands here
    //             }
    //         }
    //     }

    //     stage('SonarQube') {
    //         when {
    //             // Run this stage always, regardless of how the build was triggered
    //             expression { true }
    //         }
    //         steps {
    //             // Stage 3 Sonar (Optional): Use SonarQube to scan the code and generate reports
    //             script {
    //                 echo 'Running SonarQube analysis...'
    //                 // Add your SonarQube analysis commands here
    //             }
    //         }
    //     }

    //     stage('Integration Test') {
    //         when {
    //             // Stage only triggered when a merge request is created
    //             expression { currentBuild.changeSets.size() > 0 }
    //         }
    //         steps {
    //             // Stage 4 Integration Test: Run the integration tests
    //             script {
    //                 echo 'Running integration tests...'
    //                 // Add your integration test commands here
    //             }
    //         }
    //     }
    }

    post {
        always {
            // Additional cleanup or notification steps can be added here
            echo 'This will always run.'
        }
    }
}