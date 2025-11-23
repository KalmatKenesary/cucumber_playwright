pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
