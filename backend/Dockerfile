FROM openjdk:22-jdk
WORKDIR /app
COPY target/*.jar /app/app.jar 
EXPOSE 8080
CMD ["java", "-jar", "/app/app.jar"]

