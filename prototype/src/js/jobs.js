
// var $filters = {
// 	name: null,
// 	category: [],
// 	type: [],
// 	salarymin: null,
// 	salarymax: null,
// 	location: [],
// 	industry: [],
// 	skills: []
// };
var options = {
    valueNames: [ 
        'title', 
        'location',
        'type',
        'salarymin',
        'salarymax',
        'industry',
        'excerpt',
        {
            name: 'icon',
            attr: 'data-type'
        }
    ],
    listClass: 'jobs__list-items',
    item: '<article class="card bg-lgrey jobs__list-item"><div class="job-title"><span class="icon"></span><h3 class="title"></h3></div><div class="info"><div class="info__item"><i class="far fa-map-marker-alt"></i><span class="text-size-medium location"></span></div><div class="info__item"><i class="far fa-clock"></i><span class="text-size-medium type"></span></div><div class="info__item"><i class="far fa-euro-sign"></i><span class="text-size-medium"><number class="salarymin"></number> - <number class="salarymax"></number></span></div><div class="info__item"><i class="far fa-industry"></i><span class="text-size-medium industry"></span></div></div><p class="text-size-small excerpt"></p><a href="" class="btn btn__small navy">More info</a></article>'
};

var values = [
    { 
        icon: 'it',
        title: 'Product Owner', 
        location: ['Stockholm', 'Sweden'],
        type: 'Fulltime employee',
        salarymin: 40000,
        salarymax: 60000,
        industry: 'Banking',
        excerpt: 'Voor onze opdrachtgever in Utrecht zijn wij op zoek naar een ervaren Product Owner. Onz  opdrachtgever ontwikkelt innovatieve maatwerk applicaties voor klanten die …'
    }
];

if($('#jobs__list-cont').length > 0) {
    var hackerList = new List('jobs__list-cont', options);
    hackerList.add(values);
}

function loadMoreJobs($items)
{
	var $left = $items;	
	$('.jobs__list-item:hidden').each(function() {
		if($left > 0) {
			$(this).fadeIn(300);
		}
		$left--;
	});
	if(!$('.jobs__list-item:hidden').length > 0) {
		$('.jobs__list-items').find('.loadmore').fadeOut(300);
	}

}

function activateFilter()
{
	$el = $('.jobs__list-filters').find('.filter-title');
	$el.on('click', function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active').parent().removeClass('active');
			// $(this).next('.filters').find('li.active').each(function() {
			// 	$(this).removeClass('active');
			// });
		} else {
			$(this).addClass('active').parent().addClass('active');
		}
	});
}

function selectFilter(el)
{
	$el = $('.jobs__list-filters').find('.filters').find('span');
	$el.on('click', function(e) {
		// console.log($(this));
		// console.log(e.target);
		var $data = $(this).parent().data();
		//console.log($data);
		if($(this).parent().hasClass('active')) {
            // removeFilter($(this).parent().data());
			$(this).parent().removeClass('active');
			$(this).next('ul').find('li.active').each(function() {
                // removeFilter($(this).data());
                $(this).removeClass('active');
			});
		} else {
            // addFilter($(this).parent().data());
            $(this).parent().addClass('active');
            hackerList.filter(function(item) {
                if (item.values().salarymax > 65000 || item.values().salarymin > 35000) {
                   return true;
                } else {
                   return false;
                }
            });
		}

	});
}

function addFilter($val) 
{
	var $key = Object.keys($val)[0];
	var $value = $val[$key];
	if(Array.isArray($filters[$key])) {
		$filters[$key].push($value);
	} else {
		$filters[$key] = $value;
	}
	filtering();
}

function removeFilter($val) 
{
	var $key = Object.keys($val)[0];
	var $value = $val[$key];
	if(Array.isArray($filters[$key])) {
		var $index = $filters[$key].indexOf($value);
		if($index > -1) {
			$filters[$key].splice($index, 1);
		}
	} else {
		$filters[$key] = null;
	}
	filtering();
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }
    var max = arr[0];
    var maxIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

function filtering()
{

    var $len = Object.keys($filters).length;
    var $jobs = [];

    // for(var i = 0; i < $len; i++) {
    //     var $key = Object.keys($filters)[i]
    //     console.log($key);
    //     var $val = $filters[$key];
    //     if($val != null && $val !== undefined && $val.length != 0) {
            
    //     }
    // }

    $('.jobs__list-item').each(function() {

        var $points = 0;
        var $data = $(this).data();
        //console.log($data);
        for(var i = 0; i < $len; i++) {
            var $key = Object.keys($filters)[i]
            //console.log($key);
            var $val = $filters[$key];
            if($val != null && $val !== undefined && $val.length != 0) {
                if(Array.isArray($val)) {
                    if(typeof $data[$key] == "string"){
                        var $vals = $data[$key].split('|');
                        for(var j = 0; j < $vals.length; j++) {
                            console.log($vals[j]);
                            for(var k = 0; k < $val.length; k++){
                                console.log($val[k]);
                                if($val[k] == $vals[j]) {
                                    $points++;
                                }
                            }
                        } 
                    }
                } else {

                }
                
            }
        }

        // if() {

        // } else {

        // }
        //onsole.log($points);
        $jobs.push($points);
        $(this).fadeOut(0);
    });
    //console.log($jobs);
    $no = 5;
    for($l = 0; $l < $no; $l++) {
        var $ind = indexOfMax($jobs);
        if($jobs[$ind] !== 0) {
            console.log($ind);
            $('.jobs__list-item').eq($ind).prependTo('.jobs__list-items').fadeIn(0);
        }
        $jobs[$ind] = 0;
        //console.log($jobs);
    }
    
}

$(document).ready(function() {
	
	if($('.jobs__list-filters').length > 0) {
		activateFilter();
		selectFilter();
    }
    
    
    //hackerList.show(1, 1);
    
});