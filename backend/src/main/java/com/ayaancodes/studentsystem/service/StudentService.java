package com.ayaancodes.studentsystem.service;

import com.ayaancodes.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public String deleteStudent(Integer id);
    public String deleteAllStudents();
}
