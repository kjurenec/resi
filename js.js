(function () {
  function e(a) {
    console.log(a);
  }
  function sb(a) {
    1001 == a.code || 1002 == a.code || 1003 == a.code
      ? ra(
          "A problem with the video was encountered.<br /><br />Please try refreshing your browser window."
        )
      : ra(
          "A problem with the video was encountered. (Category = " +
            a.category +
            " Code = " +
            a.code +
            ")"
        );
    var b =
      "Shaka.onLoadError Category " +
      a.category +
      " Code " +
      a.code +
      " Severity " +
      a.severity;
    b += Ra(a);
    D(b);
  }
  function ra(a) {
    V.style.display = "none";
    I.style.display = "none";
    Sa.style.display = "none";
    E.style.display = "none";
    J.style.display = "none";
    sa.style.display = "block";
    sa.innerHTML = a;
  }
  function tb(a) {
    V.style.display = a.buffering ? "inherit" : "none";
  }
  function Ta(a) {
    a = p.canCast() && ta;
    var b = p.isCasting();
    a
      ? ((v.style.display = "inherit"),
        b
          ? ((F.style.display = "inherit"),
            (F.textContent = "Casting to " + p.receiverName()),
            K.classList.add("la1-casting"))
          : ((F.style.display = "none"),
            (F.textContent = ""),
            K.classList.remove("la1-casting")),
        ua())
      : ((v.style.display = "none"),
        (F.style.display = "none"),
        (F.textContent = ""));
    ((null == ca && b) || (null != ca && ca != b)) && window.setTimeout(W, 1e3);
    ca = b;
  }
  function ub(a) {
    p.isCasting()
      ? p.suggestDisconnect()
      : ((v.disabled = !0),
        p.cast().then(
          function () {
            v.disabled = !1;
            va();
            n.value = c.volume;
            da.style.display = "block";
            ea.style.display = "none";
            var b = ["to right"];
            b.push("#ccc " + 100 * n.value + "%");
            b.push("#000 " + 100 * n.value + "%");
            b.push("#000 100%");
            n.style.background = "linear-gradient(" + b.join(",") + ")";
          }.bind(this),
          function (b) {
            v.disabled = !1;
            b.code != shaka.util.Error.Code.CAST_CANCELED_BY_USER &&
              (e("Cast Error:"), e(b));
          }.bind(this)
        ));
  }
  function vb(a) {
    c && c.duration && (1 == K.style.opacity ? (w = Date.now()) : q(a));
  }
  function Ua(a) {
    c && c.duration && (c.paused ? c.play() : c.pause());
  }
  function wa() {
    c.paused && !L
      ? ((xa.style.display = "none"),
        (ya.style.display = "block"),
        (J.style.display = "block"))
      : ((xa.style.display = "block"),
        (ya.style.display = "none"),
        (J.style.display = "none"));
    q({ type: "mousemove" });
  }
  function Va() {
    Wa = !c.paused;
    L = !0;
    c.pause();
  }
  function wb() {
    c.duration && Xa();
  }
  function Ya() {
    c.currentTime = parseFloat(m.value);
    L = !1;
    Wa && c.play();
  }
  function M(a, b) {
    var d = Math.floor(a / 3600),
      g = Math.floor((a / 60) % 60),
      f = Math.floor(a % 60);
    10 > f && (f = "0" + f);
    f = g + ":" + f;
    b && (10 > g && (f = "0" + f), (f = d + ":" + f));
    return f;
  }
  function Xa() {
    var a = L ? m.value : c.currentTime;
    if (h.isLive()) {
      var b = h.seekRange(),
        d = b.end - b.start;
      a = Math.max(0, Math.floor(b.end - a));
      za.textContent = 1 <= a || L ? "- " + M(a, 3600 <= d) : "LIVE";
    } else (b = 3600 <= c.duration), (za.textContent = M(a, b));
    b = h.seekRange();
    m.min = b.start;
    m.max = b.end;
    L || (m.value = c.currentTime);
    d = b.end - b.start;
    a = (c.currentTime - b.start) / d || 0;
    b = (m.value - b.start) / d || 0;
    a = Math.max(a, b);
    d = ["to right"];
    d.push("#ccc");
    d.push("#ccc " + 100 * b + "%");
    d.push("#444 " + 100 * b + "%");
    d.push("#444 " + 100 * a + "%");
    d.push("#000 " + 100 * a + "%");
    m.style.background = "linear-gradient(" + d.join(",") + ")";
  }
  function ua() {
    c.muted
      ? ((n.value = 0),
        (da.style.display = "none"),
        (ea.style.display = "block"))
      : ((n.value = c.volume),
        (da.style.display = "block"),
        (ea.style.display = "none"),
        va());
    var a = ["to right"];
    a.push("#ccc " + 100 * n.value + "%");
    a.push("#000 " + 100 * n.value + "%");
    a.push("#000 100%");
    n.style.background = "linear-gradient(" + a.join(",") + ")";
  }
  function xb(a) {
    c && c.duration && (c.muted = !c.muted);
  }
  function yb(a) {
    va();
    c.muted = !1;
  }
  function va() {
    N && (N.style.display = "none");
  }
  function zb() {
    c.volume = parseFloat(n.value);
    c.muted = !1;
  }
  function fa() {
    if (null != p && p.isCasting()) return !0;
    var a =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;
    return !a || ("la1-videoContainer" != a.id && "la1-video" != a.id)
      ? !1
      : !0;
  }
  function Ab() {
    fa()
      ? ((Aa.style.display = "none"), (Ba.style.display = "block"))
      : ((Aa.style.display = "block"), (Ba.style.display = "none"));
    W();
  }
  function Bb(a) {
    fa() ? document.exitFullscreen() : x.requestFullscreen();
  }
  function q(a) {
    "touchstart" == a.type || "touchmove" == a.type || "touchend" == a.type
      ? (w = Date.now())
      : w + 1e3 < Date.now() && (w = null);
    (w && "mousemove" == a.type) ||
      ((x.style.cursor = ""),
      (E.style.cursor = ""),
      (J.style.cursor = ""),
      (K.style.opacity = 1),
      y && (window.clearTimeout(y), (y = null)),
      ("touchend" != a.type && w) ||
        (y = window.setTimeout(Za.bind(this), 2e3)));
  }
  function Cb(a) {
    E.contains(a.toElement) ||
      w ||
      (y && (window.clearTimeout(y), (y = null)), Za());
  }
  function Za() {
    y = null;
    c.paused ||
      ((x.style.cursor = "none"),
      (E.style.cursor = "none"),
      (J.style.cursor = "none"),
      (K.style.opacity = w ? "0" : ""));
  }
  function Db() {
    X.style.display = "none" == X.style.display ? "block" : "none";
  }
  function W() {
    if (null != h && "auto" == z) {
      var a = $a.abr.restrictions,
        b = Infinity;
      I &&
        ((b = 1),
        "devicePixelRatio" in window &&
          1 < window.devicePixelRatio &&
          (b = window.devicePixelRatio),
        (b = Math.ceil(I.clientHeight * b * 1.1)),
        490 > b && (b = 490));
      a.maxHeight = b;
      h.configure($a);
    }
  }
  function ab() {
    for (var a = "", b = 0; b < O.length; b++) {
      var d = O[b],
        g = "onclick=\"la1SelectBitrate('" + d + "');\"",
        f = "0.0";
      d == z && (f = "1.0");
      a +=
        "<li " +
        g +
        '><svg style="vertical-align:bottom;opacity:' +
        (f +
          '" fill="#FFFFFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> ') +
        d +
        "p</li>";
    }
    f = "0.0";
    "auto" == z && (f = "1.0");
    X.innerHTML =
      a +
      ('<li onclick="la1SelectBitrate(\'auto\');"><svg style="vertical-align:bottom;opacity:' +
        (f +
          '" fill="#FFFFFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Auto</li>'));
  }
  function Eb() {
    O = [];
    for (var a = h.getVariantTracks(), b = 0; b < a.length; b++) {
      var d = a[b];
      -1 == O.indexOf(d.height) && O.push(d.height);
    }
    O.sort(function (g, f) {
      return f - g;
    });
  }
  function Ca(a) {
    return isFinite(a) ? (isNaN(a) ? null : !1) : !0;
  }
  function bb() {
    try {
      var a = c.currentTime;
      if (a === G)
        e(
          "Skipping analytics report because player position hasn't changed. videoCurrentTime=" +
            a +
            " previousPosition=" +
            G
        );
      else {
        G = a;
        var b = M(a, !0),
          d = Ca(c.duration),
          g = "";
        a = "";
        if (null != d && d) {
          var f = c.currentTime,
            k = c.duration;
          g = isFinite(k) ? k - f : null;
          a = M(g, !0);
        }
        var A = fa();
        e("===== PLAYER STATE (HLS) =====");
        e({
          State: c.paused ? "Paused" : "Playing",
          "Bitrate Setting": "unknown",
          "Video Height": c.videoHeight,
          "Video Width": c.videoWidth,
          "Video Bandwidth": "unknown",
          "Audio Bandwidth": "unknown",
          "Video/Audio Bandwidth": "unknown",
          "Current Position": b,
          "Current Time": c.currentTime,
          "Is Content Live": null !== d ? (d ? "Yes" : "No") : "unknown",
          "Dist Behind Live": g,
          "Dist Behind Live (formatted)": a,
          Domain: document.domain,
          "User Agent": window.navigator.userAgent,
          "Stream Duration": Number.isFinite(c.duration)
            ? c.duration
            : "Infinity",
          "Is Fullscreen": A ? "Yes" : "No",
        });
        f = 0;
        e("----- WATCHED (" + c.played.length + ") -----");
        if (0 < c.played.length) {
          for (k = 0; k < c.played.length; k++) {
            var P = c.played.start(k),
              Y = c.played.end(k);
            f += Y - P;
            e("[" + P + " to " + Y + "]");
          }
          e("Total Time Watched: " + f);
        }
        null != H &&
          cb({
            state: c.paused ? "Paused" : "Playing",
            videoHeight: c.videoHeight,
            videoWidth: c.videoWidth,
            currentPosition: b,
            live: d,
            distBehindLive: d ? a : null,
            totalTimeWatched: f,
            bitrateSetting: null,
            videoBandwidth: null,
            audioBandwidth: null,
            bufferingTime: null,
            droppedFrames: null,
            estimatedBandwidth: null,
            bitrateSwitchCount: null,
            fullScreen: A,
          });
      }
    } catch (t) {
      D(ha(t));
    }
  }
  function db() {
    try {
      var a = c.currentTime;
      if (a === G)
        e(
          "Skipping analytics report because player position hasn't changed. videoCurrentTime=" +
            a +
            " previousPosition=" +
            G
        );
      else {
        G = a;
        var b = M(a, !0),
          d = h.isLive(),
          g = "n/a";
        if (d) {
          var f = h.seekRange();
          displayTime = Math.max(0, Math.floor(f.end - a));
          g = M(displayTime, !0);
        }
        var k = fa(),
          A = (f = a = null),
          P = null,
          Y = null;
        a: {
          for (var t = h.getVariantTracks(), Da = 0; Da < t.length; Da++) {
            var eb = t[Da];
            if (eb.active) {
              var r = eb;
              break a;
            }
          }
          r = null;
        }
        null != r &&
          ((a = r.height),
          (f = r.width),
          (A = r.videoBandwidth),
          (P = r.audioBandwidth),
          (Y = r.bandwidth));
        e("===== PLAYER STATE (DASH) =====");
        e({
          State: c.paused ? "Paused" : "Playing",
          "Bitrate Setting": z,
          "Video Height": a,
          "Video Width": f,
          "Video Bandwidth": A,
          "Audio Bandwidth": P,
          "Video/Audio Bandwidth": Y,
          "Current Position": b,
          "Current Time": c.currentTime,
          "Is Content Live": d ? "Yes" : "No",
          "Dist Behind Live": g,
          Domain: document.domain,
          "User Agent": window.navigator.userAgent,
          "Stream Duration": Number.isFinite(c.duration)
            ? c.duration
            : "Infinity",
          "Is Fullscreen": k ? "Yes" : "No",
        });
        r = 0;
        if (c.played) {
          if (
            (e("----- WATCHED (" + c.played.length + ") -----"),
            0 < c.played.length)
          ) {
            for (t = 0; t < c.played.length; t++) {
              var fb = c.played.start(t),
                gb = c.played.end(t);
              r += gb - fb;
              e("[" + fb + " to " + gb + "]");
            }
            e("Total Time Watched: " + r);
          }
        } else (r = null), e("Video Watched Not Available");
        e("***** SHAKA STATS *****");
        e(h.getStats());
        if (null != H) {
          var ia = h.getStats();
          cb({
            state: c.paused ? "Paused" : "Playing",
            videoHeight: a,
            videoWidth: f,
            currentPosition: b,
            live: d,
            distBehindLive: d ? g : null,
            totalTimeWatched: r,
            bitrateSetting: z,
            videoBandwidth: A,
            audioBandwidth: P,
            bufferingTime: ia.bufferingTime,
            droppedFrames: ia.droppedFrames,
            estimatedBandwidth: ia.estimatedBandwidth,
            bitrateSwitchCount: ia.switchHistory.length,
            fullScreen: k,
          });
        }
      }
    } catch (Fb) {
      D(ha(Fb));
    }
  }
  function ha(a) {
    var b = [];
    null != a &&
      (a.name && b.push("NAME: " + a.name),
      a.message && b.push("MESSAGE: " + a.message),
      a.stack && b.push("STACK: " + a.stack));
    return b.join(" ");
  }
  function cb(a) {
    var b = new XMLHttpRequest();
    b.open("PUT", H, !0);
    b.setRequestHeader("Content-type", "application/json; charset=utf-8");
    b.onreadystatechange = function () {
      b.readyState === XMLHttpRequest.DONE &&
        (200 === b.status
          ? e("Stats update was sent successfully")
          : e("Unable to send stats update. Status: " + b.status));
    };
    b.send(JSON.stringify(a));
  }
  function D(a) {
    if (null != H) {
      e("Reporting Error: " + a);
      a = { state: "Error - " + a };
      var b = new XMLHttpRequest();
      b.open("PUT", H, !0);
      b.setRequestHeader("Content-type", "application/json; charset=utf-8");
      b.onreadystatechange = function () {
        b.readyState === XMLHttpRequest.DONE &&
          (200 === b.status
            ? e("Error report was sent successfully")
            : e("Unable to send error report. Status: " + b.status));
      };
      b.send(JSON.stringify(a));
    }
  }
  function Ra(a) {
    message = "";
    try {
      switch (a.code) {
        case 1001:
          message +=
            " Additional: BAD_HTTP_STATUS Status Code=" +
            a.data[1] +
            " URI=" +
            a.data[0];
          break;
        case 1002:
          message += " Additional: HTTP_ERROR URI=" + a.data[0];
          break;
        case 3014:
          message +=
            " Additional: MEDIA_SOURCE_OPERATION_FAILED Media Error Code=" +
            a.data[0];
          break;
        case 3015:
          message +=
            " Additional: MEDIA_SOURCE_OPERATION_THREW Exception=" + a.data[0];
          break;
        case 3016:
          message +=
            " Additional: VIDEO_ERROR Media Error Code=" +
            a.data[0] +
            " MSExtErrorCode=" +
            a.data[1] +
            " Chrome Details=" +
            a.data[2];
      }
    } catch (b) {
      message += " Additional: error formatting extra info. Ex=" + b.toString();
    }
    return message;
  }
  function Ea() {
    Z = null;
    var a = new XMLHttpRequest();
    a.open("GET", hb, !0);
    a.onreadystatechange = function () {
      if (a.readyState === XMLHttpRequest.DONE)
        if (200 === a.status) {
          var b = JSON.parse(a.responseText);
          b.cloud[Q] !== l.cloud[Q]
            ? (e("New event found. Player will reload."),
              (l = b),
              (R = null),
              (G = ""),
              "dashUrl" === Q
                ? S()
                : "hlsUrl" === Q
                ? ib()
                : e("Unable to load new event. Unknown event type=" + Q))
            : (Z = setTimeout(Ea, ja));
        } else
          e("Unable to check if live event is available. Status: " + a.status),
            500 <= a.status && (Z = setTimeout(Ea, ja));
    };
    a.send();
  }
  function jb(a, b) {
    var d =
        l.hasOwnProperty("newEventCheckSeconds") &&
        null !== l.newEventCheckSeconds,
      g = l.hasOwnProperty("newEventCheckUrl") && null !== l.newEventCheckUrl;
    !a &&
      d &&
      g &&
      (e("Event is on-demand. Setting timer to check for live event."),
      clearTimeout(Z),
      (hb = l.newEventCheckUrl),
      (ja = 1e3 * l.newEventCheckSeconds),
      (Q = b),
      (Z = setTimeout(Ea, ja)));
  }
  function kb(a) {
    H = a.hasOwnProperty("statsUrl") ? a.statsUrl : null;
    B = a.hasOwnProperty("statsUpdateFreq")
      ? 1e3 * parseInt(a.statsUpdateFreq)
      : 6e4;
    3e4 > B && (B = 6e4);
    e(
      "Analytics initialized. statsUpdateFreq=[" + B + "] statsUrl=[" + H + "]"
    );
  }
  function Fa(a) {
    aa = Math.floor(a);
    null !== h &&
      (e("[BW] defaultBandwidthEstimate = " + aa),
      h.configure({ abr: { defaultBandwidthEstimate: aa } }));
  }
  function Ga() {
    null === u || C || (u.abort(), (u = null), (C = !0));
  }
  function Gb() {
    !C && T && (e("[BW] aborting bandwidth test (taking too long)"), Ga(), S());
  }
  function Hb() {
    Ha = new Date().getTime();
    u = new XMLHttpRequest();
    u.onreadystatechange = function () {
      if (u.readyState === XMLHttpRequest.DONE) {
        e("[BW] bandwidth test done");
        C = !0;
        if (200 === u.status) {
          var a = new Date().getTime() - Ha;
          e("[BW] Elapsed Time = " + a);
          Fa(((8 * lb.sizeInBytes) / a) * 1e3);
        }
        T && S();
      }
    };
    u.open("GET", lb.url, !0);
    setTimeout(Gb, 250);
    u.send();
  }
  function Ia() {
    window.la1IsiOSDevice
      ? (C = !0)
      : navigator.connection &&
        navigator.connection.downlink &&
        0 < navigator.connection.downlink
      ? (e(
          "[BW] navigator.connection.downlink = " +
            navigator.connection.downlink
        ),
        (C = !0),
        Fa(1e6 * navigator.connection.downlink),
        T && S())
      : Hb();
  }
  function S() {
    null !== Ja && Ja === l.cloud.dashUrl
      ? e("Requested manifest is already loaded.")
      : ((Ja = l.cloud.dashUrl),
        kb(l),
        W(),
        h
          .load(l.cloud.dashUrl, R)
          .then(function () {
            jb(h.isLive(), "dashUrl");
            V.style.display = "none";
            wa();
            ua();
            z = "auto";
            Eb();
            ab();
            mb ||
              ((mb = !0),
              window.addEventListener("resize", function () {
                clearTimeout(nb);
                nb = setTimeout(W, 750);
              }));
            var a = c.play();
            void 0 !== a &&
              a
                .then(function () {
                  console.log(
                    "DASH Player Loaded (Autoplay Started). IsLive=" +
                      h.isLive()
                  );
                })
                ["catch"](function () {
                  c.muted = !0;
                  var b = c.play();
                  void 0 !== b &&
                    b.then(function () {
                      console.log(
                        "DASH Player Loaded (Autoplay Started but Muted). IsLive=" +
                          h.isLive()
                      );
                      N && (N.style.display = "block");
                    });
                });
            null !== U && clearInterval(U);
            U = window.setInterval(db, B);
            e("Analytics interval has been set using " + B);
            window.setTimeout(db, 1e3);
          })
          ["catch"](sb));
  }
  function Ib(a) {
    V.style.display = "inherit";
    a = new shaka.Player(I);
    p = new shaka.cast.CastProxy(I, a, ka);
    e("CASTPROXY created using " + ka);
    c = p.getVideo();
    h = p.getPlayer();
    h.addEventListener("error", function (d) {
      var g = "Shaka video player reported an error.";
      null != d &&
        d.detail &&
        ((g +=
          " Category " +
          d.detail.category +
          " Code " +
          d.detail.code +
          " Severity " +
          d.detail.severity),
        (g += Ra(d.detail)));
      e(g);
      e(d);
      D(g);
    });
    h.addEventListener("buffering", tb.bind(this));
    c.addEventListener("play", wa.bind(this));
    c.addEventListener("pause", wa.bind(this));
    c.addEventListener("volumechange", ua.bind(this));
    p.addEventListener("caststatuschanged", Ta.bind(this));
    v.addEventListener("click", ub);
    m.addEventListener("mousedown", Va.bind(this));
    m.addEventListener("touchstart", Va.bind(this));
    m.addEventListener("input", wb.bind(this));
    m.addEventListener("touchend", Ya.bind(this));
    m.addEventListener("mouseup", Ya.bind(this));
    n.addEventListener("input", zb.bind(this));
    E.addEventListener("touchstart", vb);
    E.addEventListener("click", Ua);
    Ka.addEventListener("click", Ua);
    La.addEventListener("click", xb);
    N.addEventListener("click", yb);
    x.addEventListener("mousemove", q.bind(this));
    x.addEventListener("touchmove", q.bind(this));
    x.addEventListener("touchend", q.bind(this));
    x.addEventListener("mouseout", Cb.bind(this));
    a = document.getElementById("la1-fullscreenButton");
    a.addEventListener("click", Bb);
    document.addEventListener("fullscreenchange", Ab);
    X.style.display = "none";
    var b = document.getElementById("la1-bitrateButton");
    b.addEventListener("click", Db);
    Ka.addEventListener("focus", q.bind(this));
    m.addEventListener("focus", q.bind(this));
    La.addEventListener("focus", q.bind(this));
    n.addEventListener("focus", q.bind(this));
    v.addEventListener("focus", q.bind(this));
    b.addEventListener("focus", q.bind(this));
    a.addEventListener("focus", q.bind(this));
    window.setInterval(Xa.bind(this), 125);
    h.addEventListener("adaptation", function (d) {
      d = h.getStats();
      ob != d.height && (e("ABR change: " + d.height), (ob = d.height));
    });
    h.configure({
      manifest: { retryParameters: { timeout: 15e3, maxAttempts: 3 } },
      streaming: { retryParameters: { timeout: 15e3, maxAttempts: 3 } },
    });
    null !== aa && Fa(aa);
  }
  function ib() {
    kb(l);
    var a = l.cloud.hlsUrl;
    null !== R &&
      ((a += "#t=" + R),
      e("Adding media fragment to manifest URL: " + a),
      (R = null));
    c.addEventListener("loadeddata", pb);
    c.src = a;
    c.load();
    null !== Ma && clearInterval(Ma);
    Ma = window.setInterval(Jb, 5e3);
  }
  function Kb(a, b) {
    b.innerHTML =
      '<video id="la1-video" width="100%" autoplay playsinline>    <source src="" type="application/x-mpegURL">Your browser or operating system version is not supported. Please ensure you are using iOS 10 or later and your browser is up-to-date.</video>';
    c = document.getElementById("la1-video");
    c.addEventListener("error", Lb);
    c.addEventListener("loadedmetadata", function () {
      jb(Ca(c.duration), "hlsUrl");
    });
  }
  function Jb() {
    if (!c.paused) {
      var a = c.currentTime,
        b = new Date().getTime();
      a: {
        if (null != c) {
          var d = c.currentTime;
          if (0 < c.buffered.length)
            for (var g = 0; g < c.buffered.length; g++) {
              var f = c.buffered.start(g),
                k = c.buffered.end(g);
              if (d >= f && d <= k) {
                d = k - d;
                break a;
              }
            }
        }
        d = 0;
      }
      null == la
        ? 0 < a && a != ma && (la = a)
        : Na
        ? na == a
          ? b - oa > Mb &&
            ((g = null == pa ? 0 : b - pa),
            d > qa ||
              g < Nb ||
              ((la = null),
              (Na = !1),
              (na = oa = null),
              (qa = 0),
              (pa = null),
              (ma = a),
              c.addEventListener("loadeddata", qb),
              (Oa = !1),
              window.setTimeout(Ob, 12e3),
              c.load()))
          : ((oa = b), (na = a))
        : a != la && ((Na = !0), (oa = b), (na = a));
      d != qa && ((qa = d), (pa = b));
    }
  }
  function Ob() {
    Oa || c.load();
  }
  function qb() {
    Oa = !0;
    c.removeEventListener("loadeddata", qb);
    null != c && null != ma && ((c.currentTime = ma), c.play());
  }
  function Lb() {
    D("video.onError Code = " + c.error.code + " Message: " + c.error.message);
    e(
      "The following error was encountered. Code: " +
        c.error.code +
        " Message: " +
        c.error.message
    );
  }
  function pb() {
    c.removeEventListener("loadeddata", pb);
    var a = c.currentTime;
    Ca(c.duration)
      ? a > ba
        ? ((c.currentTime = a - ba),
          e("Using presentation delay of " + ba + " seconds"))
        : ((c.currentTime = 0),
          e(
            "Close to beginning, so only using presentation delay of " +
              a +
              " seconds"
          ))
      : e("Stream is on-demand, not using presentation delay.");
    null !== U && clearInterval(U);
    U = window.setInterval(bb, B);
    e("Analytics interval has been set using " + B);
    window.setTimeout(bb, 1e3);
  }
  function Pa(a, b) {
    window.la1IsiOSDevice
      ? (e("iOS detected."),
        a.hasOwnProperty("presentationDelay") &&
          ((ba = parseFloat(a.presentationDelay)),
          e("hlsPresentationDelay: " + ba)),
        Kb(a, b),
        ib())
      : (shaka.polyfill.installAll(),
        a.hasOwnProperty("chromeCastAppId") &&
          null != a.chromeCastAppId &&
          ((ka = a.chromeCastAppId), (ta = !0), e("Enabling Chromecast")),
        (b.innerHTML =
          '        <div id="la1-videoContainer" class="la1-overlay-parent">          <div class="la1-aspect-ratio"></div>          <video id="la1-video" class="la1-overlay"></video>          <button id="la1-giantPlayButtonContainer" class="la1-overlay" type="button" tabindex="-1" aria-label="Toggle Play Pause">            <div id="la1-giantPlayButton">              <div class="la1-giantPlayButtonInner">                <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>              </div>            </div>          </button>          <button id="la1-autoplay-muted-msg-container" class="la1-overlay" type="button" aria-label="Tap to Unmute">            <div id="la1-autoplay-muted-msg" class="la1-overlay">              <span class="la1-muted-msg-icon"><svg fill="#FFFFFF" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg></span>              <span class="la1-muted-msg-text">TAP TO UNMUTE</span>            </div>          </button>          <div id="la1-bufferingSpinner" class="la1-overlay">            <svg class="la1-spinnerSvg" viewBox="25 25 50 50">              <circle class="la1-spinnerPath" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />            </svg>          </div>          <div id="la1-castReceiverName"></div>          <div id="la1-errorMessage" class="la1-errorMessage la1-overlay"></div>          <div id="la1-controlsContainer" class="la1-overlay">            <div id="la1-controls">              <button id="la1-playPauseButton" type="button" aria-label="Toggle Play Pause">                <svg id="la1-playBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                <svg id="la1-pauseBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>              </button>              <div class="la1-inputRangeWrapper la1-seekBarWrapper">                <input id="la1-seekBar" type="range" step="any" min="0" max="1" value="0" aria-label="Seek Bar">              </div>              <div id="la1-currentTime">0:00</div>              <button id="la1-muteButton" type="button" aria-label="Toggle Mute">                <svg id="la1-unmuteBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                <svg id="la1-muteBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>              </button>              <div class="la1-inputRangeWrapper la1-volumeWrapper">                <input id="la1-volumeBar" type="range" step="any" min="0" max="1" value="0" aria-label="Volume">              </div>              <div class="la1-bitrate-menu">                <button id="la1-bitrateButton" type="button" aria-label="Resolution Options">                  <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>                </button>                <ul id="la1-bitrate-menu-content">                </ul>              </div>              <button id="la1-castButton" type="button" aria-label="Toggle Chromecast">                <svg id="la1-castBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" opacity=".1"/><path d="M0 0h24v24H0z" fill="none"/><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"/></svg>                <svg id="la1-stopCastingBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" opacity=".1"/><path d="M0 0h24v24H0z" fill="none"/><path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>              </button>              <button id="la1-fullscreenButton" type="button" aria-label="Toggle Fullscreen">                <svg id="la1-fullscreenIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>                <svg id="la1-fullscreenExitIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>              </button>              <img id="la1-logo" alt="Living As One" />            </div>          </div>        </div>'),
        (I = document.getElementById("la1-video")),
        (Sa = document.getElementById("la1-controlsContainer")),
        (K = document.getElementById("la1-controls")),
        (V = document.getElementById("la1-bufferingSpinner")),
        (F = document.getElementById("la1-castReceiverName")),
        (sa = document.getElementById("la1-errorMessage")),
        (N = document.getElementById("la1-autoplay-muted-msg-container")),
        (Ka = document.getElementById("la1-playPauseButton")),
        (ya = document.getElementById("la1-playBtnIcon")),
        (xa = document.getElementById("la1-pauseBtnIcon")),
        (La = document.getElementById("la1-muteButton")),
        (da = document.getElementById("la1-muteBtnIcon")),
        (ea = document.getElementById("la1-unmuteBtnIcon")),
        (za = document.getElementById("la1-currentTime")),
        (m = document.getElementById("la1-seekBar")),
        (v = document.getElementById("la1-castButton")),
        (Aa = document.getElementById("la1-fullscreenIcon")),
        (Ba = document.getElementById("la1-fullscreenExitIcon")),
        (n = document.getElementById("la1-volumeBar")),
        (E = document.getElementById("la1-giantPlayButtonContainer")),
        (J = document.getElementById("la1-giantPlayButton")),
        (x = document.getElementById("la1-videoContainer")),
        (X = document.getElementById("la1-bitrate-menu-content")),
        (Qa = document.getElementById("la1-logo")),
        a.hasOwnProperty("logoUrl") &&
          null != a.logoUrl &&
          ((Qa.src = a.logoUrl), (Qa.style.display = "block")),
        shaka.Player.isBrowserSupported()
          ? (e("Your browser is supported."), Ib(a))
          : (e("Your browser is NOT supported."),
            ra(
              "Your browser is not supported.<br /><br />Please ensure that you are using the most up-to-date version of your browser."
            ),
            D("browser not supported")));
  }
  function Pb(a) {
    var b = a.split(":"),
      d = b.length - 1;
    return 0 == d
      ? parseFloat(a)
      : 1 == d
      ? ((a = parseInt(b[0])), (b = parseFloat(b[1])), 60 * a + b)
      : 2 == d
      ? ((d = parseInt(b[0])),
        (a = parseInt(b[1])),
        (b = parseFloat(b[2])),
        3600 * d + 60 * a + b)
      : NaN;
  }
  function Qb() {
    var a = document.getElementById("resi-video-player");
    a || (a = document.getElementById("la1-video-player"));
    return a;
  }
  function rb(a) {
    var b = Qb();
    if (b)
      if (a)
        (l = {
          statsUrl: null,
          statsUpdateFreq: 6e4,
          cloud: { hlsUrl: a, dashUrl: a },
        }),
          Pa(l, b),
          (T = !0),
          Ia();
      else {
        if ((a = b.getAttribute("data-start-pos"))) {
          var d = Pb(a);
          isNaN(d)
            ? e(
                "Unable to parse the following start position into seconds: " +
                  a
              )
            : (R = d);
        }
        if ((a = b.getAttribute("data-embed-id"))) {
          var g = new XMLHttpRequest();
          g.onreadystatechange = function () {
            if (g.readyState === XMLHttpRequest.DONE)
              if ((e("[BW] embed code API done"), (T = !0), 200 === g.status)) {
                l = JSON.parse(g.responseText);
                Pa(l, b);
                var k = l;
                try {
                  null != k &&
                    k.hasOwnProperty("clientId") &&
                    null != k.clientId &&
                    window.localStorage &&
                    window.localStorage.setItem("clientId", k.clientId);
                } catch (A) {
                  D(ha(A));
                }
                k = l;
                "undefined" !== typeof la1WebPlayerOptions &&
                  null != la1WebPlayerOptions &&
                  la1WebPlayerOptions.hasOwnProperty("changePageTitle") &&
                  null != k &&
                  k.hasOwnProperty("name") &&
                  (document.title = la1WebPlayerOptions.changePageTitle.replace(
                    "[[event-name]]",
                    k.name
                  ));
                C ? S() : 250 < new Date().getTime() - Ha && (Ga(), S());
              } else
                C || Ga(),
                  0 == g.status
                    ? (b.innerHTML =
                        "There was a problem loading the event. (Status: " +
                        g.status +
                        ")<br /><br />Please try refreshing your browser window.")
                    : 404 == g.status
                    ? "event" === b.getAttribute("data-type")
                      ? (b.innerHTML = "This event is no longer available.")
                      : (b.innerHTML =
                          "Event is not currently available. (Status: " +
                          g.status +
                          ")")
                    : (b.innerHTML =
                        "Event is not currently available. (Status: " +
                        g.status +
                        ")");
          };
          d =
            "event" === b.getAttribute("data-type")
              ? "https://webevents.livingasone.com/api/v1/events/"
              : "https://webevents.livingasone.com/api/v1/eventprofiles/latest/";
          a: {
            try {
              if (window.localStorage) {
                var f = window.localStorage.getItem("clientId");
                break a;
              }
            } catch (k) {
              e("Local Storage Error: " + ha(k));
            }
            f = null;
          }
          f = null != f ? "?clientId=" + f : "";
          Ia();
          g.open("GET", d + a + f, !0);
          g.send();
        } else
          (f = b.getAttribute("data-manifest"))
            ? ((l = {
                statsUrl: null,
                statsUpdateFreq: 6e4,
                cloud: { hlsUrl: f, dashUrl: f },
              }),
              e("Loading webplayer using embed code manifest attribute."),
              Pa(l, b),
              (T = !0),
              Ia())
            : e(
                "Event cannot be loaded because no embed code ID or manifest URL was found."
              );
      }
    else e("video player DIV not found.");
  }
  var ka = "7AF33776",
    $a = { abr: { restrictions: { maxHeight: Infinity, minHeight: 0 } } },
    H = null,
    B = 6e4,
    l = null,
    c = null,
    h = null,
    p = null,
    ta = !1,
    I = null,
    x = null,
    Sa = null,
    K = null,
    V = null,
    F = null,
    sa = null,
    N = null,
    Ka = null,
    ya = null,
    xa = null,
    La = null,
    da = null,
    ea = null,
    za = null,
    m = null,
    n = null,
    Aa = null,
    Ba = null,
    v = null,
    E = null,
    J = null,
    X = null,
    Qa = null,
    O = [],
    z = "auto",
    ba = 60,
    w = null,
    y = null,
    L = !1,
    Wa = !1,
    U = null,
    G = "",
    nb = null,
    hb = null,
    ja = 6e4,
    Q = "dashUrl",
    Z = null,
    Ma = null,
    mb = !1,
    R = null,
    ob = 0,
    lb = {
      url: "https://control.resi.io/webplayer/bandwidth-test/test-180.jpg",
      sizeInBytes: 40225,
    },
    u = null,
    Ha = 0,
    T = !1,
    C = !1,
    aa = null,
    Ja = null;
  window.la1AllowCast = function (a) {
    ta = a;
    Ta(null);
    a && e("CC_APP_ID = " + ka);
  };
  var ca = null;
  window.la1SelectBitrate = function (a) {
    var b = document.getElementById("la1-bitrate-menu-content");
    z == a
      ? (b.style.display = "none")
      : ((z = a),
        "auto" == a
          ? (e("ABR on auto"), W())
          : (e("ABR restricted to " + a + "p"),
            (a = {
              abr: {
                restrictions: { maxHeight: parseInt(a) + 1, minHeight: a - 1 },
              },
            }),
            h.configure(a)),
        (b.style.display = "none"),
        ab());
  };
  Number.isFinite =
    Number.isFinite ||
    function (a) {
      return "number" === typeof a && isFinite(a);
    };
  var qa = 0,
    pa = null,
    la = null,
    Na = !1,
    oa = null,
    na = null,
    Oa = !1,
    ma = null,
    Mb = 15e3,
    Nb = 1e4;
  "undefined" == typeof shaka &&
    "undefined" != typeof exports &&
    (console.log("Shaka was not defined (will use exports)"),
    (shaka = exports));
  window.la1InitWebPlayer = rb;
  rb();
})();
