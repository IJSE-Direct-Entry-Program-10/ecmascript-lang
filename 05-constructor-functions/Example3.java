abstract class User{
    String username;
    String password;

    public User(String username, String password){
        this.username = username;
        this.password = password;
    }

    abstract void login();
    abstract void logout();

    final static int SOME_RANDOM_INT = ((int) Math.random()) * 10;
}

abstract class Employee extends User {

    public Employee(String username, String password) {
        super(username, password);
    }

    void login(){
        System.out.println(this.username + " logged in");
    }
    void logout(){
        System.out.println(this.username + " logged out");
    }

    abstract void sendEmails();
}

final class Manager extends Employee {

    public Manager(String username, String password) {
        super(username, password);

    }

    @Override
    void sendEmails() {
        System.out.println("Manager sends the emails");
    }
}

final class Assistant extends Employee {

    public Assistant(String username, String password) {
        super(username, password);

    }

    @Override
    void sendEmails() {
        System.out.println("Assitant sends the emails");
    }

    
}