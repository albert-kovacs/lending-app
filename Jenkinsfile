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
        stage('Push to new repo') {
            steps {
                sshagent(['git@github.com:albert-kovacs/test.git']) {
                sh "git push origin master"
                }
            }
        }
    }
}