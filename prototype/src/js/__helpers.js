(function ($) {
  $.each(['show', 'hide'], function (i, ev) {
    var el = $.fn[ev];
    $.fn[ev] = function () {
      this.trigger(ev);
      return el.apply(this, arguments);
    };
  });
})(jQuery);

jQuery.fn.preventDoubleSubmission = function () {
  $(this).on('submit', function (e) {
    var $form = $(this);

    if ($form.data('submitted') === true) {
      // Previously submitted - don't submit again
      e.preventDefault();
      console.log('prevent double submittion');
    } else {
      // Mark it so that the next submit can be ignored
      $form.data('submitted', true);
    }
  });

  // Keep chainability
  return this;
};

function lazyImages() {
  $('.lazyset').each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
      $(this)
        .attr('srcset', $(this).data('srcset'))
        .removeAttr('data-srcset')
        .addClass('loaded');
    }
  });
  $('.lazy').each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
      $(this)
        .attr('src', $(this).data('src'))
        .removeAttr('data-src')
        .addClass('loaded');
    }
  });

  $(window).on('scroll resize', function () {
    $('.lazyset').each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
        $(this)
          .attr('srcset', $(this).data('srcset'))
          .removeAttr('data-srcset')
          .addClass('loaded');
      }
    });
    $('.lazy').each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
        $(this)
          .attr('src', $(this).data('src'))
          .removeAttr('data-src')
          .addClass('loaded');
      }
    });
  });
}

function slideTo(el) {
  $('html, body').animate(
    {
      scrollTop: $(el).offset().top - 160,
    },
    500
  );
}

function spaceFromBottom(el) {
  var eTop = $(el).offset().top; //get the offset top of the element
  if (eTop - $(window).scrollTop() < $(window).height() + 600) {
    return true;
  } else {
    return false;
  }
}

function getFileName($input, $el) {
  $text = $input.value;
  document.getElementById($el).innerHTML = $text.split('\\')[2];
}

function isScriptLoaded(url) {
  var scripts = document.getElementsByTagName('script');
  for (var i = scripts.length; i--; ) {
    if (scripts[i].src == url) return true;
  }
  return false;
}

function addScript($src) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = $src;
  head.appendChild(script);
}

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState) {
    // only required for IE <9
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

/**
 * Parse url
 */
function urlParser($url) {
  var parser = document.createElement('a');
  parser.href = $url;

  var $result = parser.hostname;

  return $result;
}

/**
 * Get referrer address
 */
function getReferrer() {
  var $url = document.referrer;

  if (getCookie('referrerURL')) {
    var $oldURL = getCookie('referrerURL');
  }

  if ($url.length > 0 || $oldURL) {
    if (typeof $oldURL != 'undefined' && $oldURL !== null) {
      var $hostname = urlParser($oldURL);
      var $search = $oldURL.split('?')[1];
    } else {
      var $hostname = urlParser($url);
      var $search = $url.split('?')[1];
    }

    var $searchAdwords = false;
    var $host = $hostname;

    if (typeof $search != 'undefined' && $search !== null) {
      var $searchParts = $search.split('&');
      var $searchPhrase = 'gclid';
      var $searchPartsArr = [];

      for (var $i = 0; $i < $searchParts.length; $i++) {
        $searchPartsArr.push($searchParts[$i].split('='));
      }
      for (var $i = 0; $i < $searchPartsArr.length; $i++) {
        var $part = $searchPartsArr[$i];
        for (var $j = 0; $j < $part.length; $j++) {
          if ($part[$j].match($searchPhrase) !== null) {
            $searchAdwords = true;
            break;
          }
        }
      }
    }

    if ($hostname !== window.location.hostname) {
      if (!$oldURL) {
        setCookie('referrerURL', $url, '7');
      }

      if ($searchAdwords === true) {
        $('#cv-upload-form, #job-application-form')
          .find('input[name="applicant-find"]')
          .val('Google Adwords');
      } else {
        $('#cv-upload-form, #job-application-form')
          .find('input[name="applicant-find"]')
          .val($host);
      }
    }
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function parseParams(querystring) {
  // parse query string
  const params = new URLSearchParams(querystring);

  const obj = {};

  // iterate over all keys
  for (const key of params.keys()) {
    if (params.getAll(key).length > 1) {
      obj[key] = params.getAll(key);
    } else {
      obj[key] = params.get(key);
    }
  }

  return obj;
}

function itemsDown($item) {
  var item = $('.' + $item);
  var cont = item.parent();
  var elH = 0;
  var dropH = cont.height();
  cont.children().each(function () {
    if (!$(this).hasClass($item)) {
      elH = elH + $(this).outerHeight(true);
      console.log($(this));
    }
  });
  var fH = dropH - elH - item.height() - 50;
  if (fH > 0) {
    item.css({ 'margin-top': fH + 'px' });
  }
}
