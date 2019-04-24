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
        stage('Running unit tests') { 
            steps {
                sh "npm run test:unit"
            }
        }
        stage('Running cucumber feature tests') { 
            steps {
                sh "npm run test:features"
            }
        }     
        stage('Running visual regression test') { 
            steps {
                sh "npm run test:visualregression"
            }
        }         
        stage('Running visual e2e tests') { 
            steps {
                sh "npm run test:e2e"
            }
        }            
    }
}