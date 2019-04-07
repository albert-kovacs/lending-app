pipeline {
    agent any 
    stages {
        stage('Create Packages') { 
            steps {
                sh "npm install"
            }
        }
        stage('Running linter') { 
            steps {
                sh "npm run lint"
            }
        }
    }
}