
  // document.getElementById("fistEmployee").innerHTML ='test'; 
  // document.getElementById("fistEmployee").innerHTML ="EmployeeId" + firstEmployee.employeeId + "," + "Employee Name" + firstEmployee.fullName + "," + "Department" + firstEmployee.departement+ "," + "Employee Level" + firstEmployee.level + ","; 


  function calculateSalary(){
    var max = 2000;
    var min = 500;
    var salary =  Math.floor(Math.random() * (max - min + 1)) + min;
    if(salary >= 1500 && sal <= 2000){
        return 'Senior';
    }else if (salary >= 1000 && sal < 1500){
      return 'Mid-Senior';
    }else if(salary >= 500 && sal < 1000){
      return 'Junior';
    }
  
  }





function Employee(Id, Name, dep, lev) {
  this.employeeId = Id;
  this.fullName = Name;
  this.departement = dep;
  this.level = lev;
  return true;
}




const firstEmployee = new Employee("1000", "Ghazi Samer", "Administration", "Senior");
const secEmployee = new Employee("1001", "Lana Ali", "Finance", "Senior");
const thirdEmployee = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior");
const fourthEmployee = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior");
const fifthEmployee = new Employee("1004", "Omar Zaid", "Development", "Senior");
const sixthEmployee = new Employee("1005", "Rana Saleh", "Development", "Junior");
const seventhEmployee = new Employee("1006", "Hadi Ahmad", "Administration", "Mid-Senior");



  document.getElementById("firstEmployee").innerHTML ="EmployeeId :" + firstEmployee.employeeId + ", " + "Employee Name :" + firstEmployee.fullName + ", " + "Department :" + firstEmployee.departement+ ", " + "Employee Level :" + firstEmployee.level + ", "; 
  document.getElementById("secEmployee").innerHTML ="EmployeeId :" + secEmployee.employeeId + ", " + "Employee Name :" + secEmployee.fullName + ", " + "Department :" + secEmployee.departement+ ", " + "Employee Level :" + secEmployee.level + ", "; 
  document.getElementById("thirdEmployee").innerHTML ="EmployeeId :" + thirdEmployee.employeeId + ", " + "Employee Name :" + thirdEmployee.fullName + ", " + "Department :" + thirdEmployee.departement+ ", " + "Employee Level :" + thirdEmployee.level + ", "; 
  document.getElementById("fourthEmployee").innerHTML ="EmployeeId :" + fourthEmployee.employeeId + ", " + "Employee Name :" + fourthEmployee.fullName + ", " + "Department :" + fourthEmployee.departement+ ", " + "Employee Level :" + fourthEmployee.level + ", "; 
  document.getElementById("fourthEmployee").innerHTML ="EmployeeId :" + fourthEmployee.employeeId + ", " + "Employee Name :" + fourthEmployee.fullName + ", " + "Department :" + fourthEmployee.departement+ ", " + "Employee Level :" + fourthEmployee.level + ", "; 
  document.getElementById("fifthEmployee").innerHTML ="EmployeeId :" + fifthEmployee.employeeId + ", " + "Employee Name :" + fifthEmployee.fullName + ", " + "Department :" + fifthEmployee.departement+ ", " + "Employee Level :" + fifthEmployee.level + ", "; 
  document.getElementById("sixthEmployee").innerHTML ="EmployeeId :" + sixthEmployee.employeeId + ", " + "Employee Name :" + sixthEmployee.fullName + ", " + "Department :" + sixthEmployee.departement+ ", " + "Employee Level :" + sixthEmployee.level + ", "; 
  document.getElementById("sixthseventhEmployeeEmployee").innerHTML ="EmployeeId :" + seventhEmployee.employeeId + ", " + "Employee Name :" + seventhEmployee.fullName + ", " + "Department :" + seventhEmployee.departement+ ", " + "Employee Level :" + seventhEmployee.level + ", "; 



















