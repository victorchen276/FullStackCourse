package com.mtzendo.CourseDemo.student;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StudentDataAccessService {

    public List<Student> selectAllStudent() {
        return List.of(
                new Student(UUID.randomUUID(),
                        "aaa",
                        "aaa",
                        "aaa@test.com",
                        Student.Gender.FEMALE),
                new Student(UUID.randomUUID(),
                        "bbb",
                        "bbb",
                        "bbb@test.com",
                        Student.Gender.MALE)
        );
    }

}
