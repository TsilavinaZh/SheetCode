<!-- crtl + F pour chercher du code -->

PHP Tutorial
PHP Syntax
PHP Comments
PHP Variables
PHP Echo / Print
PHP Data Types
PHP Strings
PHP Numbers
PHP Constants
PHP Operators
PHP If...Else...Elseif
PHP Switch
PHP Loops
PHP Functions
PHP Arrays
PHP Superglobals

<!-- PHP Forms -->
PHP Form Handling
PHP Form Validation
PHP Form Required
PHP Form URL/E-mail
PHP Form Complete

<!-- PHP Advanced -->
PHP Date and Time
PHP Include
PHP File Handling
PHP File Open/Read
PHP File Create/Write
PHP File Upload
PHP Cookies
PHP Sessions
PHP Filters
PHP Filters Advanced
PHP JSON
<!--  -->
<?php

// PHP Variables
    // data types

$txt = "Hello world!";// string
$x = 5;// int
$y = 10.5;// float
$z=true || false;    // boolean
$cars = array("Volvo","BMW","Toyota");//Array
$x = null;//Null value

var_dump($x);//data types

?>

<!-- PHP echo and print Statements -->
    <!-- PHP echo and print Statements
    echo and print are more or less the same. They are both used to output data to the screen. -->

    <!-- echo -->
    <?php
echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";
?>
    <!-- print -->
    <?php
print "<h2>PHP is Fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!";
?>

<!--PHP String -->
<?php
echo strlen("Hello world!"); // outputs 12
echo str_word_count("Hello world!"); // outputs 2
echo strrev("Hello world!"); // outputs !dlrow olleH
echo strpos("Hello world!", "world"); // outputs 6
echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!
?>

<!-- PHP Numbers -->
<?php
// PHP Floats
$x = 10.365;
var_dump(is_float($x));

// PHP Infinity
$x = 1.9e411;
var_dump($x);

// PHP NaN
$x = acos(8);
var_dump($x);

// PHP Numerical Strings
$x = 5985;
var_dump(is_numeric($x));
$x = "5985";
var_dump(is_numeric($x));
$x = "59.85" + 100;
var_dump(is_numeric($x));
$x = "Hello";
var_dump(is_numeric($x));  

// Cast float to int
$x = 23465.768;
$int_cast = (int)$x;
echo $int_cast;

echo "<br>";

// Cast string to int
$x = "23465.768";
$int_cast = (int)$x;
echo $int_cast;
?>

<!-- PHP constants -->
<?php
// case-sensitive
define("GREETING", "Welcome to W3Schools.com!");

// case-insensitive
define("GD", "Welcome to W3Schools.com!", true);
echo GREETING;
?>

<!-- PHP Operators -->
<?php
// PHP Arithmetic Operators

    // +	Addition	$x + $y	Sum of $x and $y	
    // -	Subtraction	$x - $y	Difference of $x and $y	
    // *	Multiplication	$x * $y	Product of $x and $y	
    // /	Division	$x / $y	Quotient of $x and $y	
    // %	Modulus	$x % $y	Remainder of $x divided by $y	
    // **	Exponentiation	$x ** $y	Result of raising $x to the $y'th power

?>

<!-- PHP if...else...elseif Statements -->
<!-- If else -->
<?php
$t = date("H");

if ($t < "10") {
    echo "Have a good morning!";
} elseif ($t < "20") {
    echo "Have a good day!";
} else {
    echo "Have a good night!";
}
?>

<!-- PHP switch Statement -->
<?php
$favcolor = "red";

switch ($favcolor) {
    case "red":
        echo "Your favorite color is red!";
        break;
    case "blue":
        echo "Your favorite color is blue!";
        break;
    case "green":
        echo "Your favorite color is green!";
        break;
    default:
        echo "Your favorite color is neither red, blue, nor green!";
}
?>

<!-- PHP Loops -->
while - loops through a block of code as long as the specified condition is true
do...while - loops through a block of code once, and then repeats the loop as long as the specified condition is true
for - loops through a block of code a specified number of times
foreach - loops through a block of code for each element in an array

<!-- The PHP while Loop -->
<?php
// while (condition is true) {
//     code to be executed;
// }
$x = 1;

while($x <= 5) {
    echo "The number is: $x <br>";
    $x++;
}
?>

<!-- PHP do while Loop -->
<?php
// do {
//     code to be executed;
// } while (condition is true);


$x = 1;

do {
    echo "The number is: $x <br>";
    $x++;
} while ($x <= 5);
?>

<!-- The PHP for Loop -->
<?php
// for (init counter; test counter; increment counter) {
//     code to be executed for each iteration;
// }
for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
}
?>


<!-- PHP foreach Loop -->
<?php
// foreach ($array as $value) {
//     code to be executed;
//   }
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $x => $val) {
  echo "$x = $val<br>";
}
?>

<!-- PHP Functions -->
<?php
function writeMsg() {
    echo "Hello world!";
}
writeMsg(); // call the function
?>


<!-- PHP Arrays -->
<?php
// Create an Array in PHP
// PHP Indexed Arrays
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";

// Get The Length of an Array
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);


// Loop Through an Indexed Array
$cars = array("Volvo", "BMW", "Toyota");
$arrlength = count($cars);
for($x = 0; $x < $arrlength; $x++) {
    echo $cars[$x];
    echo "<br>";
}

// PHP Associative Arrays
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
// or
$age['Peter'] = "35";
$age['Ben'] = "37";
$age['Joe'] = "43";

// PHP Multidimensional Arrays
$cars = array
  (
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
  );


//   PHP - Sort Functions For Arrays
            // sort() - sort arrays in ascending order
            // rsort() - sort arrays in descending order
            // asort() - sort associative arrays in ascending order, according to the value
            // ksort() - sort associative arrays in ascending order, according to the key
            // arsort() - sort associative arrays in descending order, according to the value
            // krsort() - sort associative arrays in descending order, according to the key

// Sort Array in Ascending Order - sort()
$cars = array("Volvo", "BMW", "Toyota");
sort($cars);

$numbers = array(4, 6, 2, 22, 11);
sort($numbers);

// Sort Array in Descending Order - rsort()
$cars = array("Volvo", "BMW", "Toyota");
rsort($cars);

$numbers = array(4, 6, 2, 22, 11);
rsort($numbers);

// Sort Array (Ascending Order), According to Value - asort()
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
asort($age);

// Sort Array (Ascending Order), According to Key - ksort()
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
ksort($age);

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
arsort($age);

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
krsort($age);
?>

<!-- PHP Global Variables - Superglobals -->
$GLOBALS
$_SERVER
$_REQUEST
$_POST
$_GET
$_FILES
$_ENV
$_COOKIE
$_SESSION
<!-- #region --> 


<!-- PHP Forms -->
  <!-- PHP Form Validation -->

  <!-- Text Fields -->
<div>
Name: <input type="text" name="name">
E-mail: <input type="text" name="email">
Website: <input type="text" name="website">
Comment: <textarea name="comment" rows="5" cols="40">
</textarea>
</div>

<!-- Radio Buttons -->
  <div>
  Gender:
<input type="radio" name="gender" value="female">Female
<input type="radio" name="gender" value="male">Male
<input type="radio" name="gender" value="other">Other
  </div>


<!-- The Form Element -->
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

<!-- Big Note on PHP Form Security -->
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
<form method="post" action="test_form.php">

<!-- How To Avoid $_SERVER["PHP_SELF"] Exploits? -->
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
<form method="post" action="test_form.php/&quot;&gt;&lt;script&gt;alert('hacked')&lt;/script&gt;">


  <?php
// Validate Form Data With PHP

// define variables and set to empty values
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>



<!-- PHP Forms - Required Fields -->
<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}
?>

<!-- PHP - Display The Error Messages -->
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

Name: <input type="text" name="name">
<span class="error">* <?php echo $nameErr;?></span>
<br><br>
E-mail:
<input type="text" name="email">
<span class="error">* <?php echo $emailErr;?></span>
<br><br>
Website:
<input type="text" name="website">
<span class="error"><?php echo $websiteErr;?></span>
<br><br>
Comment: <textarea name="comment" rows="5" cols="40"></textarea>
<br><br>
Gender:
<input type="radio" name="gender" value="female">Female
<input type="radio" name="gender" value="male">Male
<input type="radio" name="gender" value="other">Other
<span class="error">* <?php echo $genderErr;?></span>
<br><br>
<input type="submit" name="submit" value="Submit">

</form>


<!-- PHP Forms - Validate E-mail and URL -->
    <!-- PHP - Validate Name -->
    $name = test_input($_POST["name"]);
if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
  $nameErr = "Only letters and white space allowed";
}

<!-- PHP - Validate E-mail -->
$email = test_input($_POST["email"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format";
}

<!-- PHP - Validate URL -->
$website = test_input($_POST["website"]);
if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
  $websiteErr = "Invalid URL";
}

<!-- PHP - Validate Name, E-mail, and URL -->
<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
      $websiteErr = "Invalid URL";
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}
?>

<!-- PHP Complete Form Example -->
<!-- PHP - Keep The Values in The Form -->
Name: <input type="text" name="name" value="<?php echo $name;?>">

E-mail: <input type="text" name="email" value="<?php echo $email;?>">

Website: <input type="text" name="website" value="<?php echo $website;?>">

Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>

Gender:
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="female") echo "checked";?>
value="female">Female
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="male") echo "checked";?>
value="male">Male
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="other") echo "checked";?>
value="other">Other




<!-- PHP Date and Time -->
<!-- The PHP Date() Function -->
date(format,timestamp)
<!-- Get a Date -->
<?php
// d - Represents the day of the month (01 to 31)
// m - Represents a month (01 to 12)
// Y - Represents a year (in four digits)
// l (lowercase 'L') - Represents the day of the week
echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");

// PHP Tip - Automatic Copyright Year
 echo date("Y");

//  Get a Time
// H - 24-hour format of an hour (00 to 23)
// h - 12-hour format of an hour with leading zeros (01 to 12)
// i - Minutes with leading zeros (00 to 59)
// s - Seconds with leading zeros (00 to 59)
// a - Lowercase Ante meridiem and Post meridiem (am or pm)
echo "The time is " . date("h:i:sa");

// Get Your Time Zone
date_default_timezone_set("America/New_York");
echo "The time is " . date("h:i:sa");

// Create a Date With mktime()
// mktime(hour, minute, second, month, day, year)
$d=mktime(11, 14, 54, 8, 12, 2014);
echo "Created date is " . date("Y-m-d h:i:sa", $d);

// Create a Date From a String With strtotime()
// strtotime(time, now)
$d=strtotime("10:30pm April 15 2014");
echo "Created date is " . date("Y-m-d h:i:sa", $d);
?>

<!-- PHP Include Files -->
<?php include 'footer.php';?>
<?php require 'footer.php';?>

<!-- PHP File Handling -->
<?php
// readFiles
echo readfile("webdictionary.txt");

// PHP File Open/Read/Close
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));
fclose($myfile);

// PHP Close File - fclose()
$myfile = fopen("webdictionary.txt", "r");
// some code to be executed....
fclose($myfile);

//PHP Read Single Line - fgets()
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);

// PHP Check End-Of-File - feof()
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// Output one line until end-of-file
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);

// PHP Read Single Character - fgetc()
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// Output one character until end-of-file
while(!feof($myfile)) {
  echo fgetc($myfile);
}
fclose($myfile);

// PHP File Create/Write
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "John Doe\n";
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);


// PHP Overwriting
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "Mickey Mouse\n";
fwrite($myfile, $txt);
$txt = "Minnie Mouse\n";
fwrite($myfile, $txt);
fclose($myfile);


// PHP File Upload
// <!DOCTYPE html>
// <html>
// <body>

// <form action="upload.php" method="post" enctype="multipart/form-data">
//     Select image to upload:
//     <input type="file" name="fileToUpload" id="fileToUpload">
//     <input type="submit" value="Upload Image" name="submit">
// </form>

// </body>
// </html>


// 
// Create The Upload File PHP Script
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}




// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

// Limit File Size
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// Limit File Type
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

// Complete Upload File PHP Script
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

////////////////////////////////////
// PHP Cookies
////////////////////////////////////
////////////////////////////////////
// PHP Session
////////////////////////////////////
////////////////////////////////////
// PHP Filters
////////////////////////////////////

?>

<!-- PHP and JSON -->
<?php
// PHP - json_encode()
$age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
$cars = array("Volvo", "BMW", "Toyota");
echo json_encode($age);

// PHP - json_decode()
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
var_dump(json_decode($jsonobj));

$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
var_dump(json_decode($jsonobj, true));

// PHP - Accessing the Decoded Values
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
$obj = json_decode($jsonobj);
echo $obj->Peter;
echo $obj->Ben;
echo $obj->Joe;
//or
echo $arr["Peter"];
echo $arr["Ben"];
echo $arr["Joe"];


// PHP - Looping Through the Values
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
$obj = json_decode($jsonobj);
foreach($obj as $key => $value) {
    echo $key . " => " . $value . "<br>";
  }
//   or
foreach($arr as $key => $value) {
    echo $key . " => " . $value . "<br>";
  }

?>


<!-- POO -->
<?php
class Person{
  private $name;
  public function getNom(){
      return $this->name;
  }
  public function setNom($name){
      $this->name=$name;
  }
}
$person = new Person();
$person->setNom('Tsilavina');
echo $person->getNom();
?>


<!-- PHP POO- Heritage -->
<?php
class Animal{
    public $name;
    public function manger(){
        echo $this->name."mange";
    }
}
class Chien extends Animal 
    {
        public function speak(){
            echo "waaof";
        }    
    }
    $chien2= new Chien();
    $chien2->name='stoby';
    $chien2->speak();
    $chien2->manger();
?>

<!-- IDK -->
<?php
class Math{
    const PI=100;

    public function resultPI(){
        echo self::PI;
    }
}

$Math= new Math();
$Math->resultPI();
?>





