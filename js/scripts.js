function PizzaOrder(name,size,crust,toppings){
    this.pizzaName=name;
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.address;
}

var orderNames=[];
var orderSizes=[];
var orderCrusts=[];
var orderToppings=[];


$(document).ready(function(){
    $(".removeOrder").last().click(function(){
        $(this).parentsUntil("#new-designs").remove();
    });
    $("button#addPizza").click(function(){        
        $("#new-designs").append(htmlString);
        $(".checkoutHide").show();
        $(".removeOrder").last().click(function(){
            $(this).parentsUntil("#new-designs").remove();
        });
    });
    $("form#myForm").submit(function(event){
        event.preventDefault();
        $(".new-design").each(function(){
            var thisName;
            var thisSize=[];
            var thisCrust=[];
            var thisToppings=[];
            thisName=$(this).find('input#pizza-name').val();
            $(this).find('input[name="size"]:checked').each(function(){
                thisSize.push(this.value);
            });
            $(this).find('input[name="crust"]:checked').each(function(){
                thisCrust.push(this.value);
            });
            $(this).find('input[name="topping"]:checked').each(function(){
                thisToppings.push(this.value);
            });                       
            orderNames.push(thisName);
            orderSizes.push(thisSize);
            orderCrusts.push(thisCrust);
            orderToppings.push(thisToppings);
        });
        var validateResult=validate(orderSizes,orderCrusts,orderToppings); 
        if (validateResult===false){
            return false;
        }
        var orderObject=new PizzaOrder(orderNames,orderSizes,orderCrusts,orderToppings);
        $("#new-designs").children().remove();
        $(".checkoutHide").hide();
        ordersDisplay(orderObject);
        clearOrder(orderObject);
    });    
});


function validate(size,crust,toppings){
    if(orderSizes.length<1){
        $(".checkoutHide").hide();
        alert("Add at least one pizza");        
        return false;
    }
    for(var index=0; index<size.length;index+=1){
        if(size[index].length<1||crust[index].length<1||toppings[index].length<1){
            alert("You have missing pizza inputs");
            falseOrderClear();
            return false;
        }
        else if(size[index].length>1||crust[index].length>1){
            alert("Select only one size and crust per pizza");
            falseOrderClear();
            return false;
        }
    }      
}

function falseOrderClear(){
    for(var orders=0;orders<=orderSizes.length+1;orders+=1){
        orderNames.pop();
        orderSizes.pop();
        orderCrusts.pop();
        orderToppings.pop();
    }
}


function ordersDisplay(orderObject){
    $(".yourOrder").show()
    $(".orderSummary").append('<div class="col-12 padTop">'+
                                    '<h5>Orders you just submitted</h5>'+
                                '</div>');
    for(var orderNum=0; orderNum<orderObject.size.length; orderNum+=1){
        var pizzaNm=orderObject.pizzaName[orderNum];
        var orderSz=orderObject.size[orderNum];
        var orderCr=orderObject.crust[orderNum];
        var orderTopps=orderObject.toppings[orderNum];        
        $(".orderSummary").append('<div class="col-12 col-md-6 col-lg-3 padTop">'+
                                        '<div class="order-bg-color">'+
                                            '<h5>Order: '+(orderNum+1).toString()+'</h5>'+
                                            '<h6>Pizza name</h6>'+
                                            '<p>'+pizzaNm+'</p>'+
                                            '<h6>Size</h6>'+
                                            '<p>'+orderSz.join(", ")+'</p>'+
                                            '<h6>Crust</h6>'+
                                            '<p>'+orderCr.join(", ")+'</p>'+
                                            '<h6>Toppings</h6>'+
                                            '<p>'+orderTopps.join(", ")+'</p><br><br>'+
                                        '</div>'+
                                    '</div>');
    }
}

function clearOrder(orderObject){
    for(var index=0; index<=orderObject.size.length+1; index+=1){
        orderObject.pizzaName.pop();
        orderObject.size.pop();
        orderObject.crust.pop();
        orderObject.toppings.pop();
        orderNames.pop();
        orderSizes.pop();
        orderCrusts.pop();
        orderToppings.pop();
    }
}


/*------HTML DESIGN FORM-------*/
var htmlString='<div class="new-design">'+
                    '<div class="pizza-design-form">'+
                        '<div class="row padding">'+                        
                            '<div class="col-12 text-right">'+
                                '<span class="removeOrder"><span class="fa fa-times-circle"></span></span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row padding">'+
                            '<div class="col-12 form-group">'+
                                '<input type="text" class="form-control" placeholder="Name your pizza" id="pizza-name" required>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col-12 col-md-5">'+
                                '<h5>Select size</h5>'+
                                '<span class="size-tip">Choose one pizza size</span><br><br>'+
                                '<div class="form-group form-check">'+
                                    '<input type="checkbox" name="size" value="Large">'+
                                    '<label>Large</label>'+
                                '</div>'+
                                '<div class="form-group form-check">'+
                                    '<input type="checkbox" name="size" value="Medium">'+
                                    '<label>Medium</label>'+
                                '</div>'+
                                '<div class="form-group form-check">'+
                                    '<input type="checkbox" name="size" value="Small">'+
                                    '<label>Small</label>'+
                                '</div>'+
                                '<div class="row padding"></div>'+
                            '</div>'+
                            '<div class="col-12 col-md-7">'+
                                '<h5>Choose crust</h5>'+
                                '<span class="crust-tip">Select one crust</span>'+
                                '<table class="table table-borderless table-hover table-sm">'+
                                    '<thead>'+
                                        '<th scope="col"></th>'+
                                        '<th scope="col">S</th>'+
                                        '<th scope="col">M</th>'+
                                        '<th scope="col">L</th>'+
                                    '</thead>'+                           
                                    '<tbody>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="crust" value="Thin crust">'+
                                                    '<label>Thin crust</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>450</td>'+
                                            '<td>550</td>'+
                                            '<td>650</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="crust" value="Flatbread crust">'+
                                                    '<label>Flatbread crust</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>400</td>'+
                                            '<td>500</td>'+
                                            '<td>600</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="crust" value="Thick crust">'+
                                                    '<label>Thick crust</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>500</td>'+
                                            '<td>600</td>'+
                                            '<td>700</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="crust" value="Wood-Fired crust">'+
                                                    '<label>Wood-Fired crust</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>450</td>'+
                                            '<td>550</td>'+
                                            '<td>650</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="crust" value="Focaccia">'+
                                                    '<label>Focaccia</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>550</td>'+
                                            '<td>650</td>'+
                                            '<td>750</td>'+                                
                                        '</tr>'+                              
                                    '</tbody>'+
                                '</table>'+                            
                            '</div>'+
                        '</div>'+
                        '<div class="row padding">'+
                            '<div class="col-12">'+
                                '<h5>Your Toppings</h5>'+
                                '<span class="toppings-tip">At least one topping</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col-12 col-md-6">'+
                                '<table class="table table-borderless table-hover table-sm">'+
                                    '<thead>'+
                                        '<th scope="col"></th>'+
                                        '<th scope="col">S</th>'+
                                        '<th scope="col">M</th>'+
                                        '<th scope="col">L</th>'+
                                    '</thead>'+                            
                                    '<tbody>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Pepperoni">'+
                                                    '<label>Pepperoni</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>50</td>'+
                                            '<td>60</td>'+
                                            '<td>70</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Diced Mango">'+
                                                    '<label>Diced Mango</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>70</td>'+
                                            '<td>80</td>'+
                                            '<td>90</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Peanut Sauce">'+
                                                    '<label>Peanut Sauce</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>40</td>'+
                                            '<td>50</td>'+
                                            '<td>60</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Garlic">'+
                                                    '<label>Garlic</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>30</td>'+
                                            '<td>40</td>'+
                                            '<td>50</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Bacon">'+
                                                    '<label>Bacon</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>70</td>'+
                                            '<td>90</td>'+
                                            '<td>110</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Mozzarella">'+
                                                    '<label>Mozzarella</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>40</td>'+
                                            '<td>50</td>'+
                                            '<td>60</td>'+                                
                                        '</tr>'+                              
                                    '</tbody>'+
                                '</table>'+
                            '</div>'+
                            '<div class="col-12 col-md-6">'+
                                '<table class="table table-borderless table-hover table-sm">'+
                                    '<thead class="thead-hide">'+
                                        '<th scope="col"></th>'+
                                        '<th scope="col">S</th>'+
                                        '<th scope="col">M</th>'+
                                        '<th scope="col">L</th>'+
                                    '</thead>'+                            
                                    '<tbody>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Salami">'+
                                                    '<label>Salami</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>50</td>'+
                                            '<td>60</td>'+
                                            '<td>70</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Pineapple">'+
                                                    '<label>Pineapple</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>30</td>'+
                                            '<td>40</td>'+                                
                                            '<td>50</td>'+
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Ham">'+
                                                    '<label>Ham</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>100</td>'+
                                            '<td>150</td>'+
                                            '<td>200</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Pork">'+
                                                    '<label>Pork</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>100</td>'+
                                            '<td>150</td>'+                                
                                            '<td>200</td>'+
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Chicken">'+
                                                    '<label>Chicken</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>150</td>'+
                                            '<td>200</td>'+
                                            '<td>250</td>'+                                
                                        '</tr>'+
                                        '<tr>'+                                
                                            '<td>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="checkbox" name="topping" value="Beef">'+
                                                    '<label>Beef</label>'+
                                                '</div>'+
                                            '</td>'+
                                            '<td>150</td>'+
                                            '<td>200</td>'+
                                            '<td>250</td>'+                                
                                        '</tr>'+                              
                                    '</tbody>'+
                                '</table>'+
                            '</div>'+
                        '</div>'+                                            
                    '</div>'+
                '</div>'