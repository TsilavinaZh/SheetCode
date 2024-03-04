# Python is a programming language.
# Python can be used on a server to create web applications.

# you can edit Python code and view the result.
    print("Hello, World!")

    # Python Comments
    # Python Variables
    # Python Data Types
    # Python Numbers
    # Python Casting
    # Python Strings
    # Python Booleans
    # Python Operators
    # Python Lists
    # Python Tuples
    # Python Sets
    # Python Dictionaries
    # Python If...Else
    # Python While Loops
    # Python For Loops
    # Python Functions
    # Python Lambda
    # Python Arrays
    # Python Classes/Objects
    # Python Inheritance
    # Python Iterators
    # Python Scope
    # Python Modules
    # Python Dates
    # Python JSON
    # Python RegEx
    # Python PIP
    # Python Try...Except
    # Python User Input
    # Python String Formatting

        # //////////////////////
        # Files handing
        # //////////////////////

    # Python File Handling
    # Python Read Files
    # Python Write/Create Files
    # Python Delete Files


#Python Comments
# this is comment

# variable
x, y, z = "Orange", "Banana", "Cherry"
# is the same as
x = "John"
x = 'John'

#data types
    # x = str("Hello World")	str	
    # x = int(20)	int	
    # x = float(20.5)	float	
    # x = complex(1j)	complex	
    # x = list(("apple", "banana", "cherry"))	list	
    # x = tuple(("apple", "banana", "cherry"))	tuple	
    # x = range(6)	range	
    # x = dict(name="John", age=36)	dict	
    # x = set(("apple", "banana", "cherry"))	set	
    # x = frozenset(("apple", "banana", "cherry"))	frozenset	
    # x = bool(5)	bool	
    # x = bytes(5)	bytes	
    # x = bytearray(5)	bytearray	
    # x = memoryview(bytes(5))	memoryview memoryview

# Python Numbers
x = 1    # int
y = 2.8  # float
z = 1j   # complex
print(type(x))


    # operation
# +	Addition	x + y	
# -	Subtraction	x - y	
# *	Multiplication	x * y	
# /	Division	x / y	
# %	Modulus	x % y	
# **	Exponentiation	x ** y	
# //	Floor division	x // y

# Python Assignment Operators
=	x = 5	x = 5	
+=	x += 3	x = x + 3	
-=	x -= 3	x = x - 3	
*=	x *= 3	x = x * 3	
/=	x /= 3	x = x / 3	
%=	x %= 3	x = x % 3	
//=	x //= 3	x = x // 3	
**=	x **= 3	x = x ** 3	
&=	x &= 3	x = x & 3	
|=	x |= 3	x = x | 3	
^=	x ^= 3	x = x ^ 3	
>>=	x >>= 3	x = x >> 3	
<<=	x <<= 3	x = x << 3

# compariasion
==	Equal	x == y	
!=	Not equal	x != y	
>	Greater than	x > y	
<	Less than	x < y	
>=	Greater than or equal to	x >= y	
<=	Less than or equal to	x <= y

# logical operatin
and 	Returns True if both statements are true	x < 5 and  x < 10	
or	Returns True if one of the statements is true	x < 5 or x < 4	
not	Reverse the result, returns False if the result is true	not(x < 5 and x < 10)

# Python Membership Operators
    in 	Returns True 
    if a sequence with the specified value is present in the object	x in y	
    
    not in	Returns True 
    if a sequence with the specified value is not present in the object	x not

# Python Bitwise Operators
& 	AND	
|	OR	
 ^	XOR	
~ 	NOT	
<<	Zero fill left shift
>>	Signed right shift

# liste 
thislist = ["apple", "banana", "cherry"]
thistuple = ("apple", "banana", "cherry")
thisset = {"apple", "banana", "cherry"}

# condition
# multi line
if b > a or b == a or b < a:
  print("b is greater than a")
  elif a == b:
    print("a and b are equal")
else:
  print("b is not greater than a")

# one line
print("A") if a > b else print("=") if a == b else print("B")


    #while loops
        i = 1
        while i < 6:
        print(i)
        i += 1
    # break_statment
    break 
    # continue Statement
    continue

    # loops
    # Python For Loops
    fruits = ["apple", "banana", "cherry"]
        for x in fruits:
        print(x)
    # Looping Through a String
        for x in "banana":
            print(x)
    # break statmentt
    fruits = ["apple", "banana", "cherry"]
        for x in fruits:
        print(x)
        if x == "banana":
            break
    # range
    for x in range(6):
        print(x)
    for x in range(2, 6):
        print(x)
    for x in range(2, 30, 3):
        print(x)

    # funtion
    def my_function():
  print("Hello from a function")

my_function()#call funtion

    #argument + parametre
        def my_function(fname):
        print(fname + " Refsnes")

    my_function("Emil")
    my_function("Tobias")
    my_function("Linus")

    # liste argument
    def my_function(food):
    for x in food:
        print(x)

    fruits = ["apple", "banana", "cherry"]

    my_function(fruits)

# Python Arrays
cars = ["Ford", "Volvo", "BMW"]
x = cars[0]#Get the value of the first array
cars[0] = "Toyota"#Modify the value of the first array
x = len(cars)#Return the number of elements in the cars array
#loops array
for x in cars:
  print(x)
cars.append("Honda")#Add one more element to the cars
cars.pop(1)cars.pop(1)#Delete the second element of the cars
cars.remove("Volvo")#delete

# classe and object
    #classe
    class MyClass:
    x = 5
    # object
    p1 = MyClass()
        print(p1.x)

    #The __init__() Function
    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age

p1 = Person("John", 36)
print(p1.name)
print(p1.age)
    
Python Classes and Objects
Python Classes/Objects
Python is an object oriented programming language.

Almost everything in Python is an object, with its properties and methods.

A Class is like an object constructor, or a "blueprint" for creating objects.

Create a Class
To create a class, use the keyword class:

Example
Create a class named MyClass, with a property named x:

class MyClass:
  x = 5
Create Object
Now we can use the class named myClass to create objects:

Example
Create an object named p1, and print the value of x:

p1 = MyClass()
print(p1.x)
The __init__() Function
The examples above are classes and objects in their simplest form, and are not really useful in real life applications.

To understand the meaning of classes we have to understand the built-in __init__() function.

All classes have a function called __init__(), which is always executed when the class is being initiated.

Use the __init__() function to assign values to object properties, or other operations that are necessary to do when the object is being created:

Example
Create a class named Person, use the __init__() function to assign values for name and age:

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)
Note: The __init__() function is called automatically every time the class is being used to create a new object.

    # Object Methods
    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age

        def myfunc(self):
            print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()

    # self parametre
    class Person:
        def __init__(mysillyobject, name, age):
            mysillyobject.name = name
            mysillyobject.age = age

        def myfunc(abc):
            print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc()

    #mofidy object
    p1.age = 40 #Set the age of p1 to 40
    del p1.age #Delete the age property from the p1 object
    del p1 #delet object

    # heritage
    #....................

    #Python Iterators
     #....................





    # module
    # file named mymodule.py
    def greeting(name):
        print("Hello, " + name)

    # import module
    import mymodule
    mymodule.greeting("Jonathan")

    # variable module
    #mymodule.py
    person1 = {
        "name": "John",
        "age": 36,
        "country": "Norway"
    }
    # import
    import mymodule
    a = mymodule.person1["age"]
    print(a)
    # Re-naming a Module
    import mymodule as mx
    a = mx.person1["age"]
    print(a)
    # mymodule.py
    def greeting(name):
        print("Hello, " + name)

person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}
    # import module
    from mymodule import person1
    print (person1["age"])


    # datetime
    import datetime
        x = datetime.datetime.now()
        y = datetime.datetime(2018, 6, 1)
        print(x)#2023-10-08 11:17:02.715979
        print(x.year) #year
        print(x.strftime("%A"))#day
        print(x.strftime("%B"))#month
    # date reference
    %a	Weekday, short version	#Wed	
    %A	Weekday, full version	#Wednesday	
    %w	Weekday as a number 0-6, 0 is Sunday	#3	
    %d	Day of month 01-31	#31	
    %b	Month name, short version	#Dec	
    %B	Month name, full version	#December	
    %m	Month as a number 01-12	#12	
    %y	Year, short version, without century	#18	
    %Y	Year, full version	#2018	
    %H	Hour 00-23	#17	
    %I	Hour 00-12	#05	
    %p	AM/PM	#PM	
    %M	Minute 00-59	#41	
    %S	Second 00-59	#08	
    %f	Microsecond 000000-999999	#548513	
    %z	UTC offset	#+0100	
    %Z	Timezone	#CST	
    %j	Day number of year 001-366	#365	
    %U	Week number of year, Sunday as the first day of week, 00-53	#52	
    %W	Week number of year, Monday as the first day of week, 00-53	#52	
    %c	Local version of date and time	#Mon Dec 31 17:41:00 2018	
    %x	Local version of date	#12/31/18	
    %X	Local version of time	#17:41:00	


# JSON in python
import json
# Convert from JSON to Python
```py
import json
x =  '{ "name":"John", "age":30, "city":"New York"}'
y = json.loads(x)
print(y["age"])
```

# Convert from Python to JSON
```py
import json
x = {
  "name": "John",
  "age": 30,
  "city": "New York"
}
y = json.dumps(x)
print(y)

# You can convert Python objects of the following types, into JSON strings:

dict
list
tuple
string
int
float
True
False
None

# Convert Python objects into JSON strings, and print the values:
import json
print(json.dumps({"name": "John", "age": 30}))
print(json.dumps(["apple", "bananas"]))
print(json.dumps(("apple", "bananas")))
print(json.dumps("hello"))
print(json.dumps(42))
print(json.dumps(31.76))
print(json.dumps(True))
print(json.dumps(False))
print(json.dumps(None))

# Python RegEx
import re
txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)

x = re.findall("ai", txt)
print(x)

x = re.findall("Portugal", txt)
print(x)


x = re.search("Portugal", txt)
print(x)


x = re.split("\s", txt)
print(x)


x = re.sub("\s", "9", txt)
print(x)


x = re.sub("\s", "9", txt, 2)
print(x)


x = re.search(r"\bS\w+", txt)
print(x.span())


x = re.search(r"\bS\w+", txt)
print(x.string)


x = re.search(r"\bS\w+", txt)
print(x.group())

# //////////////////////
# PIP

# Python Try Except
# //////////////////////

# Python String Formatting
# //////////////////////

# user input
username = input("Enter username:")


# //////////////////////
# Files handing
# //////////////////////

"""
The key function for working with files in Python is the open() function.

The open() function takes two parameters; filename, and mode.

There are four different methods (modes) for opening a file:

"r" - Read - Default value. Opens a file for reading, error if the file does not exist

"a" - Append - Opens a file for appending, creates the file if it does not exist

"w" - Write - Opens a file for writing, creates the file if it does not exist

"x" - Create - Creates the specified file, returns an error if the file exists

In addition you can specify if the file should be handled as binary or text mode

"t" - Text - Default value. Text mode

"b" - Binary - Binary mode (e.g. images)
"""

#files open
f = open("demofile.txt", "r")
print(f.read())

f = open("demofile.txt", "r")#Return the 5 first characters of the file
print(f.readline())#Read one line of the file

f = open("demofile.txt", "r")
print(f.readline())
print(f.readline())#Read two lines of the file

#loops
f = open("demofile.txt", "r")
for x in f:
  print(x)

  #close files
  f = open("demofile.txt", "r")
    print(f.readline())
    f.close()



#Write to an Existing File
    """
    Write to an Existing File
To write to an existing file, you must add a parameter to the open() function:

"a" - Append - will append to the end of the file

"w" - Write - will overwrite any existing content
    """

f = open("demofile2.txt", "a")
f.write("Now the file has more content!")
f.close()

#open and read the file after the appending:
f = open("demofile2.txt", "r")
print(f.read())

"""
To create a new file in Python, use the open() method, with one of the following parameters:

"x" - Create - will create a file, returns an error if the file exist

"a" - Append - will create a file if the specified file does not exist

"w" - Write - will create a file if the specified file does not exist
"""


    # create new files
# Create a file called "myfile.txt":
f = open("myfile.txt", "x")


# Create a new file if it does not exist:
f = open("myfile.txt", "w")

# delete files
#Remove the file "demofile.txt":
import os
os.remove("demofile.txt")

# Check if file exists, then delete it
import os
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
else:
  print("The file does not exist")

# delete folder
# Remove the folder "myfolder":
import os
os.rmdir("myfolder")


