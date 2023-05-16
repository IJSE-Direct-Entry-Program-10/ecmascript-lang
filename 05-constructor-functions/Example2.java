abstract class Vehicle{
    String regNum;
    String vin;

    public Vehicle(String regNum, String vin){
        this.regNum = regNum;
        this.vin = vin;
    }

    public abstract void drive();
    public abstract void applyBreaks();
    public abstract void shiftGears();
    public abstract void horn();
}

abstract class Car extends Vehicle {
    public Car(String regNum, String vin){
        super(regNum, vin);
    }
    public abstract void absImpl();
}

final class Prius extends Car {
    public Prius(String regNum, String vin){
        super(regNum, vin);
    }

    @Override
    public void absImpl() {
        System.out.println("Priuse ABS Implementation");
    }

    @Override
    public void drive() {
        System.out.println("Prius is Driving");
    }

    @Override
    public void applyBreaks() {
        System.out.println("Prius applies breaks");
    }

    @Override
    public void shiftGears() {
        System.out.println("Prius shifts gears");
    }

    @Override
    public void horn() {
        System.out.println("Prius is horning..!");
    }
}

final class Bugati extends Car {
    public Bugati(String regNum, String vin){
        super(regNum, vin);
    }

    @Override
    public void absImpl() {
        System.out.println("Bugati ABS Implementation");
    }

    @Override
    public void drive() {
        System.out.println("Bugati is driving");
    }

    @Override
    public void applyBreaks() {
        System.out.println("Bugati is applying breaks");
    }

    @Override
    public void shiftGears() {
        System.out.println("Bugati is shifting gears");
    }

    @Override
    public void horn() {
        System.out.println("Bugati is horning");
    }
}

class Townace extends Vehicle {

    public Townace(String regNum, String vin) {
        super(regNum, vin);
    }

    @Override
    public void drive() {
        System.out.println("Townace is driving");
    }

    @Override
    public void applyBreaks() {
        System.out.println("Townace is applying breaks");
    }

    @Override
    public void shiftGears() {
        System.out.println("Townace is shifting gears");
    }

    @Override
    public void horn() {
        System.out.println("Townace is horning..!");
    }

}