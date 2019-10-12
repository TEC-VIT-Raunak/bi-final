user = JSON.parse(localStorage.user)

var uid = user.user._id
var pair = user.user.pair
var db = firebase.firestore();
var sales_score = 0
var finance_score = 0
var production_score = 0
var research_score = 0
var weightSal
var weightPro
var weightFin
var weightRes
var combi
var thressal
var thresrnd
var thresfin
var threspro

if(pair=='pair1'||pair=='pair2'||pair=='pair3'||pair=='pair4'){
	combi = 'samsungola' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
	
})
}

if(pair=='pair5'||pair=='pair6'||pair=='pair7'||pair=='pair8'){
	combi = 'samsungmahindra' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
	
})
}
if(pair=='pair9'||pair=='pair10'||pair=='pair11'){
	combi = 'samsungdlf' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
	
})
}
if(pair=='pair12'||pair=='pair13'||pair=='pair14'){
	combi = 'samsungioc' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
	
})
}
if(pair=='pair15'||pair=='pair16'||pair=='pair17'||pair=='pair18'){
	combi = 'mahindraola' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
})
}
if(pair=='pair19'||pair=='pair20'||pair=='pair21'){
	combi = 'dlfola' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd

	
})
}
if(pair=='pair22'||pair=='pair23'||pair=='pair24'){
	combi = 'olaioc' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
	
})
}
if(pair=='pair25'||pair=='pair26'||pair=='pair27'){
	combi = 'mahindradlf' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
	
})
}
if(pair=='pair28'||pair=='pair29'||pair=='pair30'){
	combi = 'mahindraioc' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
	
})
}
if(pair=='pair31'||pair=='pair32'||pair=='pair33'||pair=='pair34'||pair=='pair35'){
	combi = 'dlfioc' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
	
})
}
if(pair=='pair1'||pair=='pair2'||pair=='pair3'||pair=='pair4'){
	combi = 'samsungola' 
	var thresDoc = db.collection("thresholds").doc(combi)
	thresDoc.get().then((snap)=>{
		thresDoc=snap.data()
		thressal = thresDoc.sal
		threspro = thresDoc.pro
		thresrnd = thresDoc.rnd
		thresfin = thresDoc.fin
		document.getElementById("thes_sal").innerHTML = thresDoc.sal
       	document.getElementById("thes_fin").innerHTML = thresDoc.fin
       	document.getElementById("thes_pro").innerHTML = thresDoc.pro
       	document.getElementById("thes_res").innerHTML = thresDoc.rnd
	
})
}


// $.ajax({
//     type:'GET',
//     url:'https://business-ideas-users-api.herokuapp.com/users/me',
//     headers: {'Authorization': `Bearer ${document.cookie}`},
//    success:function(data){
//     uid = data._id
//     pair = data.pair
    	
//    }
//  });

function sal_invf(){
	sal_inv = document.getElementById('sal_inv').value;
	if(sal_inv>0){
	// console.log(sal_inv)
	var docRef = db.collection("merger_block").doc(pair)
	docRef.get().then((doc)=>{
		pair_val=doc.data()
		current_score = pair_val.score1
		pair_val = {...pair_val,score1: (parseFloat(current_score)+parseFloat(sal_inv) * weightSal)}
		document.getElementById("sal_merge_val").innerHTML = pair_val.score1
		docRef.set(pair_val).then(()=>{
			var userDoc = db.collection("users").doc(uid)
			userDoc.get().then((snaped)=>{
				user_data = snaped.data()
				sales_score = user_data.sales_scoredb
				var updated_score = sales_score - sal_inv
				user_data = {...user_data,sales_scoredb:updated_score}
				document.getElementById("sales").innerHTML = updated_score
				userDoc.set(user_data).then(()=>{
					// document.getElementById("sal_inv").value = NaN
				}).catch((err)=>console.log(err))
			})
		})
		
	})
	}
}


function pro_invf(){
	pro_inv = document.getElementById('pro_inv').value;
	if(pro_inv>0){
	// console.log(pro_inv)
	var docRef = db.collection("merger_block").doc(pair)
	docRef.get().then((doc)=>{
		pair_val=doc.data()
		current_score = pair_val.score2
		pair_val = {...pair_val,score2: (parseFloat(current_score)+parseFloat(pro_inv)*weightPro)}
		document.getElementById("pro_merge_val").innerHTML = pair_val.score2
		docRef.set(pair_val).then(()=>{
			var userDoc = db.collection("users").doc(uid)
			userDoc.get().then((snaped)=>{
				user_data = snaped.data()
				// production_score = user_data.production_scoredb
				var updated_score = user_data.production_scoredb - pro_inv
				user_data = {...user_data,production_scoredb:updated_score}
				console.log(user_data)
				document.getElementById("production").innerHTML = updated_score
				userDoc.set(user_data).then(()=>{
					// document.getElementById("pro_inv").value = NaN
				})
			})
		})
		
	})
}
}


function fin_invf(){
	fin_inv = document.getElementById('fin_inv').value;
	if(fin_inv>0){	
	// console.log(fin_inv)
	var docRef = db.collection("merger_block").doc(pair)
	docRef.get().then((doc)=>{
		pair_val=doc.data()
		current_score = pair_val.score3
		pair_val = {...pair_val,score3: (parseFloat(current_score)+parseFloat(fin_inv)*weightFin)}
		document.getElementById("fin_merge_val").innerHTML = pair_val.score3
		docRef.set(pair_val).then(()=>{
			var userDoc = db.collection("users").doc(uid)
			userDoc.get().then((snaped)=>{
				user_data = snaped.data()
				finance_score = user_data.finance_scoredb
				var updated_score = finance_score - fin_inv
				user_data = {...user_data,finance_scoredb:updated_score}
				console.log(user_data)
				document.getElementById("finance").innerHTML = updated_score
				userDoc.set(user_data).then(()=>{
					// document.getElementById("fin_inv").value = NaN
				})
			})
		})
		
	})
}
}

function res_invf(){
	res_inv = document.getElementById('res_inv').value;
	if(res_inv>0){	
	// console.log(res_inv)
	var docRef = db.collection("merger_block").doc(pair)
	docRef.get().then((doc)=>{
		pair_val=doc.data()
		current_score = pair_val.score4
		pair_val = {...pair_val,score4: (parseFloat(current_score)+parseFloat(res_inv)*weightRes)}
		document.getElementById("res_merge_val").innerHTML = pair_val.score4
		docRef.set(pair_val).then(()=>{
			var userDoc = db.collection("users").doc(uid)
			userDoc.get().then((snaped)=>{
				user_data = snaped.data()
				research_score = user_data.research_scoredb
				var updated_score = research_score - res_inv
				user_data = {...user_data,research_scoredb:updated_score}
				document.getElementById("research").innerHTML = updated_score
				userDoc.set(user_data).then(()=>{
					// document.getElementById("res_inv").value = NaN
				})
			})
		})
		
	})
}
}

var docRef = db.collection("users").doc(uid)
	docRef.get().then((doc)=>{
		user=doc.data()
		sales_score = user.sales_scoredb
		finance_score = user.finance_scoredb
		production_score = user.production_scoredb
		research_score = user.research_scoredb
		document.getElementById("sales").innerHTML = sales_score
		document.getElementById("production").innerHTML = production_score
		document.getElementById("research").innerHTML = research_score
		document.getElementById("finance").innerHTML = finance_score	
	})
var pairDocRef = db.collection("merger_block").doc(pair)
pairDocRef.get().then((doc1)=>{
	pairDoc=doc1.data()
	document.getElementById("sal_merge_val").innerHTML = pairDoc.score1
	document.getElementById("pro_merge_val").innerHTML = pairDoc.score2
	document.getElementById("res_merge_val").innerHTML = pairDoc.score4
	document.getElementById("fin_merge_val").innerHTML = pairDoc.score3	
	
})



db.collection("merger_block").doc(pair)
	.onSnapshot(function(doc) {
	mergeDocData = doc.data()
	if(thressal<=mergeDocData.score1&&threspro<=mergeDocData.score2&&thresrnd<=mergeDocData.score4&&thresfin<=mergeDocData.score3){
		document.getElementById('submitbutton').classList.remove('disabled')
	}
    document.getElementById("sal_merge_val").innerHTML = mergeDocData.score1
	document.getElementById("pro_merge_val").innerHTML = mergeDocData.score2
	document.getElementById("res_merge_val").innerHTML = mergeDocData.score4
	document.getElementById("fin_merge_val").innerHTML = mergeDocData.score3
});

$.ajax({
        type:'GET',
        url:'https://business-ideas-users-api.herokuapp.com/users/me',
        headers: {'Authorization': `Bearer ${document.cookie}`},
       success:function(data){
       	weightSal = data.weightSal/10
       	weightFin = data.weightFin/10
       	weightPro = data.weightPro/10
       	weightRes = data.weightRes/10
       	document.getElementById("weightRes").innerHTML = data.weightRes/10
       	document.getElementById("weightFin").innerHTML = data.weightFin/10
       	document.getElementById("weightSal").innerHTML = data.weightSal/10
       	document.getElementById("weightPro").innerHTML = data.weightPro/10 
       }
   })
   function onSubmit(){
	   if(document.getElementById('submitbutton').className!=="btn btn-success disabled")
	alert("thanks your response is recorder. Wait for results.")
   }
