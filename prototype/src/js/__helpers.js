(function ($) {
  $.each(["show", "hide"], function (i, ev) {
    var el = $.fn[ev];
    $.fn[ev] = function () {
      this.trigger(ev);
      return el.apply(this, arguments);
    };
  });
})(jQuery);

window.mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

jQuery.fn.preventDoubleSubmission = function () {
  $(this).on("submit", function (e) {
    var $form = $(this);

    if ($form.data("submitted") === true) {
      // Previously submitted - don't submit again
      e.preventDefault();
      console.log("prevent double submittion");
    } else {
      // Mark it so that the next submit can be ignored
      $form.data("submitted", true);
    }
  });

  // Keep chainability
  return this;
};

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function lazyImages() {
  $(".lazyset").each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
      $(this)
        .attr("srcset", $(this).data("srcset"))
        .removeAttr("data-srcset")
        .addClass("loaded");
    }
  });
  $(".lazy").each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
      $(this)
        .attr("src", $(this).data("src"))
        .removeAttr("data-src")
        .addClass("loaded");
    }
  });

  $(window).on("scroll resize", function () {
    $(".lazyset").each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
        $(this)
          .attr("srcset", $(this).data("srcset"))
          .removeAttr("data-srcset")
          .addClass("loaded");
      }
    });
    $(".lazy").each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
        $(this)
          .attr("src", $(this).data("src"))
          .removeAttr("data-src")
          .addClass("loaded");
      }
    });
  });
}

function slideTo(el) {
  $("html, body").animate(
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
  document.getElementById($el).innerHTML = $text.split("\\")[2];
}

function isScriptLoaded(url) {
  var scripts = document.getElementsByTagName("script");
  for (var i = scripts.length; i--; ) {
    if (scripts[i].src == url) return true;
  }
  return false;
}

function addScript($src) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = $src;
  head.appendChild(script);
}

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    // only required for IE <9
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
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
  document.getElementsByTagName("head")[0].appendChild(script);
}

/**
 * Parse url
 */
function urlParser($url) {
  var parser = document.createElement("a");
  parser.href = $url;

  var $result = parser.hostname;

  return $result;
}

/**
 * Get referrer address
 */
function getReferrer() {
  var $url = document.referrer;

  if (getCookie("referrerURL")) {
    var $oldURL = getCookie("referrerURL");
  }

  if ($url.length > 0 || $oldURL) {
    if (typeof $oldURL != "undefined" && $oldURL !== null) {
      var $hostname = urlParser($oldURL);
      var $search = $oldURL.split("?")[1];
    } else {
      var $hostname = urlParser($url);
      var $search = $url.split("?")[1];
    }

    var $searchAdwords = false;
    var $host = $hostname;

    if (typeof $search != "undefined" && $search !== null) {
      var $searchParts = $search.split("&");
      var $searchPhrase = "gclid";
      var $searchPartsArr = [];

      for (var $i = 0; $i < $searchParts.length; $i++) {
        $searchPartsArr.push($searchParts[$i].split("="));
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
        setCookie("referrerURL", $url, "7");
      }

      if ($searchAdwords === true) {
        $("#cv-upload-form, #job-application-form")
          .find('input[name="applicant-find"]')
          .val("Google Adwords");
      } else {
        $("#cv-upload-form, #job-application-form")
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
