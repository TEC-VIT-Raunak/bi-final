var db = firebase.firestore();
$.ajax({
            type:'GET',
            url:'https://business-ideas-users-api.herokuapp.com/users/me',
            headers: {'Authorization': `Bearer ${document.cookie}`},
           success:function(data){
            uid = data._id
            finance_scoremdb = data.scoreFinance
            production_scoremdb = data.scoreProduction
            research_scoremdb = data.scoreRnd
            sales_scoremdb = data.scoreSales
            var docRef = db.collection("users").doc(uid)
            docRef.get().then((doc)=>{
              user_data=doc.data()
              user_data = {...user_data,
                research_scoredb:research_scoremdb,
                sales_scoredb:sales_scoremdb,
                finance_scoredb:finance_scoremdb,
                production_scoredb:production_scoremdb
              }
                    docRef.set(user_data).then(()=>{
                      console.log("done")
                      location.href = '/scoreboardr1'
                    })
            })
           }
         });