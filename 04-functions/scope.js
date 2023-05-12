let global = "Global";

function Outer(){
    let outer = "outer";

    Inner();
    function Inner(){
        let inner = "inner";

        InnerMost();
        function InnerMost(){
            let innerMost = "innerMost";

            console.log(innerMost);
            console.log(inner);
            console.log(outer);
            console.log(global);
        }
    }
}

Outer();