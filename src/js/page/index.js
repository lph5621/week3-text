require(['./js/config.js'],function(){
	require(['mui','dom'],function(mui,dom){
		mui.init();
		dom("#btn").addEventListener('tap',function(){
			location.href = "./page/date.html";
			
			
		})
	})
})