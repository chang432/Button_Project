function update_button(val) {
    //read the current count of the button

    /*
    var txtFile = "file:///Users/andrechang/Desktop/Button_Project/Button_data.txt"
    var file = new File(txtFile);

    file.open("r"); // open file with read access
    var str = "";
    while (!file.eof) {
    	// read each line of text
    	alert(file.readln());
    	//str += file.readln() + "\n";
    }
    file.close();
    */

    //alert("helloasdad");
    //document.write(str);

    var string = 'Buttonval_' + val;
    //document.write(string);
    var b = document.getElementById(string).value;

    var new_b = parseInt(b,10) + 1;
    //document.write(new_b);

    document.getElementById(string).value = new_b;
    return new_b;
}