import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Waypoint from 'react-waypoint';

class Signature extends Component {
  constructor() {
    super();
    this.state = {ran: 0}
  }
  restartAnimation(delayVal) {
    var elemSvg = this.refs.svg;
    if (this.state.ran == 1) {
      elemSvg.classList.add(css(styles.transparentSig));
    }
    var elemArr = [this.refs.D1, this.refs.D2, this.refs.dot, this.refs.L, this.refs.aniel, this.refs.au];
    var cssStyleArr = [css(styles.aniD1),css(styles.aniD2),css(styles.aniDot),css(styles.aniL),css(styles.aniAniel),css(styles.aniAu)];
    for (var i = 0; i < elemArr.length; i++) {
      this.readdClass(elemArr[i], cssStyleArr[i]);
    }
    console.log(delayVal);
    setTimeout(function() {elemSvg.classList.remove(css(styles.transparentSig))}, delayVal);
  }
  readdClass(elem, cssStyleAnimation) {
    elem.classList.remove(cssStyleAnimation);
    setTimeout(function() {elem.classList.add(cssStyleAnimation)}, 50);
  }
  animateOnce() {
    if (this.state.ran == 1) {
      return;
    }
    this.setState({ran: 1});
    this.restartAnimation(650);
  }
  render() {
    return (
      <div>
        <svg className={css(styles.transparentSig)} ref="svg" onClick={this.restartAnimation.bind(this, 650)} width="406" height="367" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>

            <path style={strokeD1} ref="D1" d="m55.5,134c0,1 0,3 0,6c0,5 0,9 0,15c0,6 0,13 0,21c0,8 0,17 0,27c0,11 0,21 0,32c0,11 0,21 0,29c0,8 0,14 0,18l0,4l0,3l0,1" id="svg_206" fillOpacity="null" strokeOpacity="null" strokeWidth="4" stroke="#000" fill="none"/>

            <path style={strokeD2} ref="D2" d="m21.5,174c0,-1 -0.459505,-2.053497 0,-4c0.513742,-2.176254 1.877657,-4.06601 3,-6c1.809723,-3.118484 3.648859,-7.19577 6,-11c2.628654,-4.25325 6,-8 11,-13c5,-5 10.817982,-10.226883 17,-15c6.808968,-5.257179 12.90654,-10.143867 19,-14c4.927216,-3.118095 10,-5 14,-6c4,-1 7,-1 10,-1c2,0 6,1 10,4c4,3 8.549011,7.606422 12,13c3.61541,5.650558 5.795685,12.091141 9,19c2.822464,6.085526 4.990234,12.790253 6,20c0.970901,6.932343 1,14 1,21c0,8 -2,17 -4,26c-2,9 -4.812134,18.077209 -9,28c-3.829567,9.073837 -7.640121,19.209564 -13,28c-5.631119,9.235291 -10.439674,17.436249 -16,24c-5.484673,6.474426 -11.19059,12.779785 -17,18c-5.363754,4.819763 -11.654892,7.822937 -18,10c-4.823025,1.654816 -10,2 -16,2c-4,0 -8.372013,-0.385101 -12,-3c-3.441809,-2.480713 -6.513008,-4.593994 -8,-7c-1.662508,-2.690002 -2,-7 -2,-11c0,-5 0.360792,-11.215118 3,-18c3.242504,-8.335846 7.685638,-15.221924 12,-21c4.672825,-6.258179 9.938133,-11.078583 15,-15c3.952656,-3.062119 7.868286,-5.288589 12,-7c2.921562,-1.210144 5,-1 7,-1c1,0 2,0 3,0l0,1" id="svg_209" fillOpacity="null" strokeOpacity="null" strokeWidth="4" stroke="#000" fill="none"/>

            <path style={strokedot} ref="dot" stroke="#000" d="m166,221c1,0 2,0 3,0c1,0 2,1 3,1l1,0" id="svg_218" fillOpacity="null" strokeOpacity="null" strokeWidth="4" fill="none"/>

            <path style={strokeL} ref="L" d="m263.005096,189c1,0 1.823761,0.486252 4,1c1.946503,0.459503 4,1 7,1c2,0 3.878571,-0.493454 7,-1c2.961273,-0.480545 6,-1 9,-3c3,-2 6,-4 8,-6c3,-3 5.190277,-5.881516 7,-9c2.24469,-3.867996 4,-8 5,-13c1,-5 2.498291,-9.937958 3,-16c0.494873,-5.979553 1.148041,-11.228363 0,-14c-1.082397,-2.613129 -2.2565,-3.203003 -3,-2c-1.662506,2.689987 -1.579712,7.156876 -4,13c-2.567108,6.197571 -6,14 -9,23c-3,9 -7.148987,19.94696 -11,31c-4.161743,11.94487 -7.378967,24.207581 -12,37c-4.416687,12.22673 -10.431885,23.813736 -15,35c-4.425079,10.835999 -8.126862,21.617157 -14,29c-4.4021,5.533661 -9.907776,8.496216 -14,9c-1.985016,0.244354 -5.21167,0.285889 -8,-2c-3.281006,-2.689789 -5.167969,-5.920349 -7,-10c-2.206055,-4.912567 -2,-11 -2,-16c0,-6 2.280273,-12.672852 7,-17c5.315308,-4.873154 13.890503,-7.579742 23,-9c10.913513,-1.701523 23.040771,-3.067505 37,-2c13.114655,1.002914 25.932098,5.166168 38,10c12.929718,5.179016 23.945435,12.068665 34,20c8.951843,7.061462 17,15 23,21l5,6l4,3l1,1" id="svg_348" fillOpacity="null" strokeOpacity="null" strokeWidth="4" stroke="#000" fill="none"/>

            <path style={strokeaniel} ref="aniel" d="m133,244.003342c0,0 0.38269,1.076126 0,2c-0.541199,1.306564 -1.458801,1.693436 -2,3c-0.38269,0.923889 -0.770248,2.026764 -1,3c-0.513748,2.176239 -1,3 -1,5c0,1 0,3 0,4c0,1 0,2 0,3c0,1 0,1 0,2c0,0 0,0 0,0c1,0 2,0 3,0c1,0 2.173096,-0.852722 3,-2c1.307449,-1.813995 0.61731,-3.076111 1,-4c0.541199,-1.306549 1,-1 1,-2c0,-1 0,-1 1,-1c0,0 1,0 1,1c0,0 0,1 0,1c0,0 1,0 1,-1c0,-1 0.292892,-2.292908 1,-3c0.707108,-0.707092 1,-1 2,-1c0,0 0,0 1,0c0,0 0,0 1,0c0,0 1,0 1,0c0,0 1,0 1,0c0,-1 1,-1 3,-1c1,0 2,0 3,0c1,0 1,0 2,0c1,0 1,0 1,0c1,0 1,1 1,1c1,0 1.292892,0.707092 2,0c0.707108,-0.707092 -0.38269,-2.076111 0,-3c0.541199,-1.306549 1,-1 2,-1c0,0 1,0 1,0c0,0 1.458801,0.693451 2,2c0.38269,0.923889 1,2 2,3c1,1 2.693436,1.458801 4,2c1.847763,0.765381 4,0 6,0c3,0 9.437973,-4.620422 16,-10c5.576645,-4.571762 14.349701,-12.714798 20,-20c7.480927,-9.645508 13.812424,-20.099426 16,-24c9.229401,-16.456558 12.482132,-19.453903 17,-34c1.512436,-4.869553 3.499237,-11.958466 4,-21c0.331802,-5.990814 0,-13 0,-18c0,-3 -1,-6 -2,-7c-1,-1 -2,-1 -4,-1c-1,0 -1.129669,-0.114685 -2,1c-3.58844,4.595993 -4.502289,10.84787 -7,20c-3.769608,13.812683 -8.168442,33.968613 -12,55c-4.184219,22.967194 -9.045486,47.178726 -14,71c-4.197937,20.183594 -7.540955,26.81842 -12,41c-3.419937,10.87677 -7.343155,19.876038 -9,25c-1.268555,3.923096 -2.692551,8.186005 -4,10c-0.826904,1.147278 -2,2 -2,3c0,0 -0.292892,1.707092 -1,1c-0.707108,-0.707092 0,-2 0,-3c0,-1 0,-1 0,-2c0,0 0,0 0,-1c0,0 0,-1 0,-1c1,0 1,0 1,0l1,0" id="svg_468" fillOpacity="null" strokeOpacity="null" strokeWidth="4" stroke="#000" fill="none"/>

            <path  style={strokeau} ref="au" d="m323.204224,214c-1,0 -2.292908,0.707108 -3,0c-0.707092,-0.707108 -1,-1 -2,-1c-2,0 -3,0 -5,0c-3,0 -4.878571,0.493454 -8,1c-2.961273,0.480545 -6.07843,0.789856 -9,2c-2.065857,0.855713 -3.692535,2.186005 -5,4c-0.826904,1.147263 -1.486267,1.823746 -2,4c-0.459503,1.946503 0,3 0,5c0,1 0,2 1,3c1,1 2.076111,1.61731 3,2c1.306549,0.541199 2,1 4,1c1,0 2.693451,-0.458801 4,-1c0.923889,-0.38269 2,-1 3,-2c1,-1 1.173096,-1.852737 2,-3c1.307465,-1.813995 0.692535,-4.186005 2,-6c0.826904,-1.147263 1.61731,-3.076126 2,-4c0.541199,-1.306564 1,-3 1,-1c0,2 0.31073,5.080246 1,8c0.513733,2.176254 1,4 2,6c1,2 1,3 2,4c1,1 2.026764,1.229752 3,1c2.176239,-0.513748 4.056641,-1.917526 7,-4c4.081696,-2.887863 7.746735,-5.371338 12,-8c3.80423,-2.351135 6.549164,-4.95517 10,-6c0.957092,-0.28978 1.714111,2.21167 4,5c2.689789,3.281006 5.186005,3.692551 7,5c1.147278,0.826904 2,1 3,1c1,0 2,0 4,0c2,0 4,0 6,0c2,0 4,0 7,0c1,0 2,0 3,0l1,0l1,-1" id="svg_576" fillOpacity="null" strokeOpacity="null" strokeWidth="4" stroke="#000" fill="none"/>
          </g>
        </svg>
        <Waypoint
          onEnter={this.animateOnce.bind(this)}
        />
      </div>
    )
  }
}

const D1 = {
  '5%': {
      strokeDashoffset: '158'
  },

  '6%': {
      strokeDashoffset: '0'
  }
};

const D2 = {
    '0%, 9%': {
        strokeDashoffset: '900'
    },

    '18%': {
        strokeDashoffset: '0'
    }
};

const aniel = {
    '0%, 17%': {
        strokeDashoffset: '1000'
    },

    '34%': {
        strokeDashoffset: '0'
    }
};

const dot = {
    '0%, 26%': {
        strokeDashoffset: '12'
    },

    '28%': {
        strokeDashoffset: '0'
    }
};

const L = {
    '0%, 31%': {
        strokeDashoffset: '700'
    },

    '42%': {
        strokeDashoffset: '0'
    }
};

const au = {
    '0%, 38%': {
        strokeDashoffset: '400'
    },

    '56%': {
        strokeDashoffset: '0'
    }
};

var strokeD1 = {
  strokeDasharray: '158'
}

var strokeD2 = {
  strokeDasharray: '900'
}

var strokeaniel = {
  strokeDasharray: '1000'
}

var strokedot = {
  strokeDasharray: '12'
}

var strokeL = {
  strokeDasharray: '700'
}

var strokeau = {
  strokeDasharray: '400'
}

const styles = StyleSheet.create({
  aniD1: {
    animationName: [D1],
    animationDuration: '12s',
    animationIterationCount: '1'
  },
  aniD2: {
    animationName: [D2],
    animationDuration: '10s',
    animationIterationCount: '1'
  },
  aniAniel: {
    animationName: [aniel],
    animationDuration: '10s',
    animationIterationCount: '1'
  },
  aniDot: {
    animationName: [dot],
    animationDuration: '10s',
    animationIterationCount: '1'
  },
  aniL: {
    animationName: [L],
    animationDuration: '10s',
    animationIterationCount: '1'
  },
  aniAu: {
    animationName: [au],
    animationDuration: '10s',
    animationIterationCount: '1'
  },
  transparentSig: {
    opacity: 0
  },
  presentedSig: {
    opacity: 1
  }
});

export default Signature;