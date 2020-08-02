package com.mtzendo.CourseDemo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StudentDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StudentDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Student> selectAllStudent() {
//        return List.of(
//                new Student(UUID.randomUUID(),
//                        "aaa",
//                        "aaa",
//                        "aaa@test.com",
//                        Student.Gender.FEMALE),
//                new Student(UUID.randomUUID(),
//                        "bbb",
//                        "bbb",
//                        "bbb@test.com",
//                        Student.Gender.MALE)
//        )
        String sql = "SELECT " +
                        "student_id, " +
                        "first_name, " +
                        "last_name, " +
                        "email, " +
                        "gender " +
                     "FROM student";
        List<Student> students = jdbcTemplate.query(sql, mapStudentFromDb());
        return students;
    }

    private RowMapper<Student> mapStudentFromDb() {
        return (resultSet, i) -> {
            String studentIdStr = resultSet.getString("student_id");
            UUID studentId = UUID.fromString(studentIdStr);
            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            String email = resultSet.getString("email");
            String genderStr = resultSet.getString("gender").toUpperCase();
            Student.Gender gender = Student.Gender.valueOf(genderStr);
            return new Student(studentId, firstName, lastName, email, gender);
        };
    }

}
