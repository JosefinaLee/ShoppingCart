var cartController=function($scope){
	$scope.cart=[
		{
			id:1000,
			name:'iphone5s',
			quantity:'3',
			price:4300
		},
		{
			id:3300,
			name:'iphone5',
			quantity:'30',
			price:3300
		},
		{
			id:232,
			name:'imac',
			quantity:'3',
			price:23000
		},
		{
			id:2000,
			name:'ipad',
			quantity:'5',
			price:6900
		},

	];


	$scope.totalPrice=function(){
		var total=0;
		angular.forEach($scope.cart,function(item){
			total+=item.quantity*item.price;
		});
		return total;
	}

	$scope.totalQuantity=function(){
		var num=0;
		angular.forEach($scope.cart,function(item){
			var quan=parseInt(item.quantity);
			num=num+quan;
		});
		return num;
	}

	$scope.remove=function(id){
		//alert(id);
		/*
		$scope.cart={

		};*/
		var index=-1;
		angular.forEach($scope.cart,function(item,key){
			if(item.id==id){
				index=key;
			}
		});

		if(index !== -1){
			$scope.cart.splice(index,1);
		}

	}

	$scope.allremove=function(){
		$scope.cart={

		}
	}

	$scope.add=function(id){
		//console.log(123);
		var index=findIndex(id);
		if(index !==-1){
			++$scope.cart[index].quantity;
		}
	}

	$scope.reduce=function(id){
		//console.log(123);
		var index=findIndex(id);
		if(index !==-1){
			var item=$scope.cart[index];
			if(item.quantity>1){
				--item.quantity;
			}else{
				//item.quantity;
				var returnKey=confirm('从购物车内删除该产品');
				if(returnKey){
					$scope.remove(id);
				}
			}
		}
	}

	var findIndex=function(id){
		var index=-1;

		angular.forEach($scope.cart,function(item,key){
			if(item.id==id){
				index=key;
				return ;
			}
		});

		return index;
	}

}








