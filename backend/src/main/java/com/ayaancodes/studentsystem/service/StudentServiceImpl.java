package com.ayaancodes.studentsystem.service;

import com.ayaancodes.studentsystem.model.Student;
import com.ayaancodes.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public String deleteStudent(Integer id) {
        studentRepository.deleteById(id);
        return "Resouce Deleted";
    }

    @Override
    public String deleteAllStudents() {
        studentRepository.deleteAll();
        return "Deleted Everything";
    }


}
