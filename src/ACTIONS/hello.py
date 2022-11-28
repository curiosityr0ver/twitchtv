def inputName():

    fName = input("Enter the first name: ")
    while fName == "":
        fName = input("Enter the first name correctly: ")
    mName = input("Enter the middle name: ")
    lName = input("Enter the last name: ")
    while lName == "":
        lName = input("Enter the last name correctly: ")

    res = lName.capitalize()

    if mName != "":
        res += ", " + mName.capitalize()

    res += ", " + fName.capitalize()

    return res


def inputEnroll():

    while True:
        enr = input("Enter the enrollment: ")
        year = enr[:4]
        id = enr[-4:]
        stream = enr[4:6]
        if len(enr) == 10:
            if year.isdigit() and id.isdigit():
                if (
                    int(year) > 999
                    and int(year) < 10000
                    and int(id) > 999
                    and int(id) < 10000
                ):
                    if stream.isalpha():
                        break
                    else:
                        print("The course should be a two letter alphabetic code")
                else:
                    print("The year and course number should both be 4 digits long")
            else:
                print("The year and course number should both be integers")
        else:
            print("The enrollment number should be 10 characters long")

    print(enr)


def inputMarks():

    while True:
        grade = ""
        sub = input("Enter the subject: ")
        marks = input("Enter marks: ")
        if sub.isalpha():
            sub = sub.capitalize()
            if marks.isnumeric():
                marks = int(marks)
                if marks >= 80:
                    grade = "A"
                elif marks >= 60:
                    grade = "B"
                elif marks >= 40:
                    grade = "C"
                else:
                    grade = "D"
                break

    print("Subject: ", sub)
    print("Grade: ", grade)

    while True:
        grade = ""
        sub = input("Enter the subject: ")
        marks = input("Enter marks: ")
        if sub.isalpha():
            sub = sub.capitalize()
            if marks.isnumeric():
                marks = int(marks)
                if marks >= 80:
                    grade = "A"
                elif marks >= 60:
                    grade = "B"
                elif marks >= 40:
                    grade = "C"
                else:
                    grade = "D"
                break

    print("Subject: ", sub)
    print("Grade: ", grade)

    while True:
        grade = ""
        sub = input("Enter the subject: ")
        marks = input("Enter marks: ")
        if sub.isalpha():
            sub = sub.capitalize()
            if marks.isnumeric():
                marks = int(marks)
                if marks >= 80:
                    grade = "A"
                elif marks >= 60:
                    grade = "B"
                elif marks >= 40:
                    grade = "C"
                else:
                    grade = "D"
                break

    print("Subject: ", sub)
    print("Grade: ", grade)


def Percentage(m1, m2, m3):

    sub1 = input("Subject 1: ")
    sub2 = input("Subject 2: ")
    sub3 = input("Subject 3: ")

    if sub1.isalpha():
        sub1 = sub1.capitalize()
        print("Subject: ", sub1)
        print(m1, "%")

    if sub2.isalpha():
        sub2 = sub2.capitalize()
        print("Subject: ", sub2)
        print(m2, "%")

    if sub3.isalpha():
        sub3 = sub3.capitalize()
        print("Subject: ", sub3)
        print(m3, "%")


def main():
    print(inputName())
    inputEnroll()
    inputMarks()
    Percentage(45, 31, 99)


main()
