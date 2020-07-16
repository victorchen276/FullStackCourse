package com.mtzendo.CourseDemo.student;

import java.util.UUID;

public class Student {

    private final UUID studentId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final Gender gender;

    public Student(UUID studentId, String firstName, String lastName, String email, Gender gender) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }
    enum Gender {
        MALE, FRMALE
    }
}
