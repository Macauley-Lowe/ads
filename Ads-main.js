
        // initialize pbjs and googletag when ad container is in view
        var pbjs = window.pbjs || {};
        pbjs.que = pbjs.que || [];
        var googletag = window.googletag || {};
        googletag.cmd = googletag.cmd || [];
        googletag.cmd.push(function() {
          googletag.enableServices();
          googletag.pubads().disableInitialLoad();
  
          // define header bidding gpt slots here
          
          var responsiveAdSlot = googletag.defineSlot
          
          
          var adUnit;
          if (window.innerWidth >= 1024) { // desktop
            adUnit_1 = googletag.defineSlot('/38577695/Web_Test/Desktop', [[970, 250], 'fluid'], 'div-gpt-ad-1681209890759-0').addService(googletag.pubads());
            adUnit_2 = googletag.defineSlot('/38577695/Web_Test/Desktop', [[728, 90], 'fluid'], 'div-gpt-ad-1681209890759-1').addService(googletag.pubads());
           
          } else { // mobile
            adUnit_1 = googletag.defineSlot('/38577695/Web_Test/Mobile', [[300, 250], 'fluid'], 'div-gpt-ad-1681209890759-0').addService(googletag.pubads());
            adUnit_2 = googletag.defineSlot('/38577695/Web_Test/Mobile', [[300, 600], 'fluid'], 'div-gpt-ad-1681209890759-1').addService(googletag.pubads());
          
          }
  
          // function that calls the ad-server
          function callAdserver(gptSlots) {
            if (pbjs.adserverCalled) return;
            pbjs.adserverCalled = true;
            googletag.pubads().refresh(gptSlots);
          }
  
          // request pbjs bids when it loads
          pbjs.que.push(function() {
            pbjs.rp.requestBids({
              callback: callAdserver,
              gptSlotObjects: [adUnit_1, adUnit_2],
            });
          });
  
          // failsafe in case PBJS doesn't load
          setTimeout(function() {
            callAdserver([adUnit_1, adUnit_2]);
          }, 500);

        });
  

  