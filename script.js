// Code goes here

var config = {


  settings: {
    hasHeaders: true,
    constrainDragToContainer: true,
    reorderEnabled: true,
    selectionEnabled: false,
    popoutWholeStack: false,
    blockedPopoutsThrowError: true,
    closePopoutsOnUnload: true,
    showPopoutIcon: true,
    showMaximiseIcon: true,
    showCloseIcon: true
  },
  dimensions: {
    borderWidth: 5,
    minItemHeight: 10,
    minItemWidth: 10,
    headerHeight: 20,
    dragProxyWidth: 300,
    dragProxyHeight: 200
  },
  labels: {
    close: 'close',
    maximise: 'maximise',
    minimise: 'minimise',
    popout: 'open in new window'
  },

  content: [{
    type: 'row',
    content: [{
      type: 'stack',
      width: 60,
      content: [{
        type: 'component',
        componentName: 'component1',
        title: 'Component 1'
      }, {
        type: 'component',
        componentName: 'component2',
        title: 'Component 2'
      }]
    }, {
      type: 'column',
      content: [{
        type: 'component',
        componentName: 'component3'
      }, {
        type: 'component',
        componentName: 'component4'
      }]
    }]
  }]
};



$(window).resize(function() {
  myLayout.updateSize()
})


var myLayout = new GoldenLayout(config);


myLayout.registerComponent( 'component1', function( container, componentState ){
    container.getElement().html($('#component1'));
});

myLayout.registerComponent( 'component2', function( container, componentState ){
    container.getElement().html($('#component2'));
});
myLayout.registerComponent( 'component3', function( container, componentState ){
    container.getElement().html($('#component3'));
});
myLayout.registerComponent( 'component4', function( container, componentState ){
    container.getElement().html($('#component4'));
});

myLayout.init();

$(document).ready(() => {

  myLayout.on('stateChanged', function(e) {
    if (e !== undefined) {
      
      let elem = e.origin.element[0];
      let headerElem = '.lm_tab';
    
      $(headerElem).each((i, e) => {
        $(e).click(() => {
          $(this).toggleClass('is-active');
        });
        
        $(e).addClass('mdl-js-ripple-effect');
        $(e).css('overflow', 'hidden')
        $(e).append('<span class="mdl-ripple"/>');
      });

      $('.lm_item.lm_stack').addClass('mdl-shadow--2dp')

      componentHandler.upgradeDom();

    }
  });
});
