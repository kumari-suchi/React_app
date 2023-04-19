console.log('infinity team API');
function getdata(b){
    url="https://reqres.in/api/users?page=1";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        var value=data;
        var img1=(value['data'][0]['avatar']);
        document.getElementById('a1img').src=img1;
        var img2=(value['data'][1]['avatar']);
        document.getElementById('a2img').src=img2;
        var img3=(value['data'][2]['avatar']);
        document.getElementById('a3img').src=img3;
        var img3=(value['data'][3]['avatar']);
        document.getElementById('a4img').src=img3;
        var img3=(value['data'][4]['avatar']);
        document.getElementById('a5img').src=img3;
        var img3=(value['data'][5]['avatar']);
        document.getElementById('a6img').src=img3;
        
        var first1=(value['data'][0]['first_name']);
        var last1=(value['data'][0]['last_name']);
        document.getElementById('n1').innerHTML=first1+" "+last1;
        var first1=(value['data'][1]['first_name']);
        var last1=(value['data'][1]['last_name']);
        document.getElementById('n2').innerHTML=first1+" "+last1;
        var first1=(value['data'][2]['first_name']);
        var last1=(value['data'][2]['last_name']);
        document.getElementById('n3').innerHTML=first1+" "+last1;
        var first1=(value['data'][3]['first_name']);
        var last1=(value['data'][3]['last_name']);
        document.getElementById('n4').innerHTML=first1+" "+last1;
        var first1=(value['data'][4]['first_name']);
        var last1=(value['data'][4]['last_name']);
        document.getElementById('n5').innerHTML=first1+" "+last1;
        var first1=(value['data'][5]['first_name']);
        var last1=(value['data'][5]['last_name']);
        document.getElementById('n6').innerHTML=first1+" "+last1;

        var mail1=(value['data'][0]['email']);
        document.getElementById('mail1').innerHTML=mail1;
        var mail2=(value['data'][1]['email']);
        document.getElementById('mail2').innerHTML=mail2;
        var mail3=(value['data'][2]['email']);
        document.getElementById('mail3').innerHTML=mail3;
        var mail3=(value['data'][3]['email']);
        document.getElementById('mail4').innerHTML=mail3;
        var mail3=(value['data'][4]['email']);
        document.getElementById('mail5').innerHTML=mail3;
        var mail3=(value['data'][5]['email']);
        document.getElementById('mail6').innerHTML=mail3;
        
    })
}