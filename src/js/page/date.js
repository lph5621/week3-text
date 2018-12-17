require(['../js/config.js'],function(){
	require(['mui','dom'],function(mui,dom){
		mui.init();
		mui.ajax("/api/get/train_tickets",{
			dataType:'json',
			success:function(res){
				console.log(res)
				if(res.code == 1){
					renderDate(res.data)
				}
			}
		})
		
		function renderDate(data){
			var str = '';
			data.forEach((item)=>{
				str += `<p><span>${item.date}</span> ===== >  <span>${item.timer}</span></p>`
			})
		}
	})
})