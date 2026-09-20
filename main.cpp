```cpp
#include <iostream>
#include <string>
using namespace std;

struct Student
{
    string rollNumber;
    string name;
    string department;

    float cpp;
    float dae;
    float dbms;
    float adsa;
    float agile;
    float maths;

    float total;
    float average;
};

int main()
{
    Student s;

    cout << "==========================================" << endl;
    cout << "          STUDENT RESULT SYSTEM           " << endl;
    cout << "==========================================" << endl;

    cout << "Enter Roll Number: ";
    cin >> s.rollNumber;

    cin.ignore();

    cout << "Enter Student Name: ";
    getline(cin, s.name);

    cout << "Enter Department Name: ";
    getline(cin, s.department);

    cout << "Enter C+++ Marks: ";
    cin >> s.cpp;

    cout << "Enter DAE Marks: ";
    cin >> s.dae;

    cout << "Enter DBMS Marks: ";
    cin >> s.dbms;

    cout << "Enter ADSA Marks: ";
    cin >> s.adsa;

    cout << "Enter Agile Marks: ";
    cin >> s.agile;

    cout << "Enter Maths Marks: ";
    cin >> s.maths;

    // Calculate total
    s.total = s.cpp + s.dae + s.dbms +
              s.adsa + s.agile + s.maths;

    // Calculate average
    s.average = s.total / 6;

    cout << endl;
    cout << "==========================================" << endl;
    cout << "              STUDENT RESULT              " << endl;
    cout << "==========================================" << endl;

    cout << "Roll Number       : " << s.rollNumber << endl;
    cout << "Student Name      : " << s.name << endl;
    cout << "Department Name   : " << s.department << endl;

    cout << "------------------------------------------" << endl;

    cout << "C+++              : " << s.cpp << endl;
    cout << "DAE               : " << s.dae << endl;
    cout << "DBMS              : " << s.dbms << endl;
    cout << "ADSA              : " << s.adsa << endl;
    cout << "Agile             : " << s.agile <<