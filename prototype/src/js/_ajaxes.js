function jobsAjaxFiltering() {
  $('.filters.job')
    .find('input')
    .on('click change', function () {
      var $this = $(this);
      var $key = $this.data('key');
      var $value = $this.data('value');
      var $data = {
        action: 'jobs_ajax_filtering',
        url: window.location.href,
      };

      $('.job-category-filters')
        .find('input')
        .each(function () {
          if ($(this).closest('.filter-input-li').hasClass('active')) {
            var $filtersKey = $(this).data('key');
            var $filtersValue = $(this).data('value');
            if (Array.isArray($data['"' + $filtersKey + '"'])) {
              $data['"' + $filtersKey + '"'].push($filtersValue);
            } else {
              $data['"' + $filtersKey + '"'] = [$filtersValue];
            }
          }
        });

      if ($this.closest('.filter-input-li').hasClass('active')) {
        var $index = $data['"' + $key + '"'].indexOf($value);
        if ($index > -1) {
          $data['"' + $key + '"'].splice($index, 1);
        }
        $this
          .closest('.filter-input-li')
          .find('.filter-input-li.active')
          .find('input')
          .each(function () {
            var $dataKey = $(this).data('key');
            var $dataValue = $(this).data('value');
            var $index = $data['"' + $dataKey + '"'].indexOf($dataValue);

            if ($index > -1) {
              $data['"' + $dataKey + '"'].splice($index, 1);
            }
          });

        $this
          .closest('.filter-input-li')
          .find('.filter-input-li.active')
          .removeClass('active');
        $this.closest('.filter-input-li').removeClass('active');
      } else {
        $this.closest('.filter-input-li').addClass('active');

        if (Array.isArray($data['"' + $key + '"'])) {
          $data['"' + $key + '"'].push($value);
        } else {
          $data['"' + $key + '"'] = [$value];
        }
      }

      var $dataCopy = {};
      for (var [key, value] of Object.entries($data)) {
        if (key !== 'action' && key !== 'url') {
          $dataCopy[key] = value;
        }
      }

      var $cURL = $data.url;

      var recursiveEncoded = $.param($dataCopy);
      var url = new URL($cURL);
      url.search = recursiveEncoded;
      var params = recursiveEncoded
        .toString()
        .replace(/"/g, '')
        .replace(/%22/g, '');
      var new_url = url.toString().replace(/"/g, '').replace(/%22/g, '');
      window.history.replaceState({}, '', new_url);

      var $current = window.location;
      var $currentObj = parseParams($current.search);
      console.log($currentObj);

      $data['params'] = params;

      console.log($data);

      $.ajax({
        type: 'POST',
        url: '/wp-admin/admin-ajax.php',
        dataType: 'json',
        data: $data,
        success: function (res) {
          $('#jobs__list-cont').html(res.html);
        },
        error: function (err) {
          console.error(err);
        },
      });

      return false;
    });
}

function postsAjaxFiltering() {
  $('.filters.post')
    .find('ul')
    .find('li')
    .find('a, input')
    .on('click', function () {
      //var $current = window.location.search;
      //var $currentObj = parseParams($current.search);

      var $this = $(this);
      var $key = $this.data('key');
      var $value = $this.data('value');
      var $data = {
        action: 'post_ajax_filtering',
        url: window.location.href,
      };

      $('.job-category-filters')
        .find('*[data-key]')
        .each(function () {
          if ($(this).parent().parent('li').hasClass('active')) {
            var $filtersKey = $(this).data('key');
            var $filtersValue = $(this).data('value');
            if (Array.isArray($data['"' + $filtersKey + '"'])) {
              $data['"' + $filtersKey + '"'].push($filtersValue);
            } else {
              $data['"' + $filtersKey + '"'] = [$filtersValue];
            }
          }
        });

      if ($this.parent().parent('li').hasClass('active')) {
        var $index = $data['"' + $key + '"'].indexOf($value);
        if ($index > -1) {
          $data['"' + $key + '"'].splice($index, 1);
        }
        $this.parent().parent('li').removeClass('active');
      } else {
        $this.parent().parent('li').addClass('active');

        if (Array.isArray($data['"' + $key + '"'])) {
          $data['"' + $key + '"'].push($value);
        } else {
          $data['"' + $key + '"'] = [$value];
        }
      }

      var $dataCopy = {};
      for (var [key, value] of Object.entries($data)) {
        if (key !== 'action' && key !== 'url') {
          $dataCopy[key] = value;
        }
      }

      var $cURL = $data.url;

      var recursiveEncoded = $.param($dataCopy);
      var url = new URL($cURL);
      url.search = recursiveEncoded;
      // var params = recursiveEncoded
      //   .toString()
      //   .replace(/"/g, '')
      //   .replace(/%22/g, '');
      var new_url = url.toString().replace(/"/g, '').replace(/%22/g, '');
      //window.history.replaceState({}, '', new_url);
      window.location.href = new_url;
      //$data['params'] = params;
      // $.ajax({
      //   type: 'POST',
      //   url: '/wp-admin/admin-ajax.php',
      //   dataType: 'json',
      //   data: $data,
      //   success: function (res) {
      //     $('#jobs__list-cont').html(res.html);
      //   },
      //   error: function (err) {
      //     console.error(err);
      //   },
      // });

      return false;
    });
}
