$(document).ready(function(){
    $(".removeOrder").last().click(function(){
        $(this).parentsUntil(".new-design").remove();
    });
    $("button#addPizza").click(function(){        
        $("#new-designs").append('<div class="new-design">'+
                                    '<div class="pizza-design-form">'+
                                        '<div class="row padding">'+                        
                                            '<div class="col-12 text-right">'+
                                                '<span class="removeOrder"><span class="fa fa-times-circle"></span></span>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="row padding">'+
                                            '<div class="col-12 form-group">'+
                                                '<input type="text" class="form-control" placeholder="Name your pizza" id="pizzaName">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="row">'+
                                            '<div class="col-12 col-md-5">'+
                                                '<h5>Select size</h5><br>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="radio" name="size" value="large" checked>'+
                                                    '<label>Large</label>'+
                                                '</div>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="radio" name="size" value="medium">'+
                                                    '<label>Medium</label>'+
                                                '</div>'+
                                                '<div class="form-group form-check">'+
                                                    '<input type="radio" name="size" value="small">'+
                                                    '<label>Small</label>'+
                                                '</div>'+
                                                '<div class="row padding"></div>'+
                                            '</div>'+
                                            '<div class="col-12 col-md-7">'+
                                                '<h5>Choose crust</h5>'+
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
                                                                    '<input type="radio" name="crust" value="Thin" checked>'+
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
                                                                    '<input type="radio" name="crust" value="Flatbread">'+
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
                                                                    '<input type="radio" name="crust" value="Thick">'+
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
                                                                    '<input type="radio" name="crust" value="Wood-Fired">'+
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
                                                                    '<input type="radio" name="crust" value="Focaccia">'+
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
                                                                    '<input type="checkbox" name="topping" value="Mango">'+
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
                                                                    '<input type="checkbox" name="topping" value="Peanut">'+
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
                                '</div>');
        $(".removeOrder").last().click(function(){
            $(this).parentsUntil(".new-design").remove();
        });
    });
});