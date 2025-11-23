pipeline {
    agent any
    stages {
        stage('Checkout') {
            checkout scm
            steps {
                echo "Selected env: ${ENV}"
            }
        }
        stage('Build') { 
            steps {
                bat 'npm i'
                bat 'npx playwright install chromium'
            }
        }
        stage('Run tests') {
            steps {
                bat 'npm run test'
            }
        }
    }
}
