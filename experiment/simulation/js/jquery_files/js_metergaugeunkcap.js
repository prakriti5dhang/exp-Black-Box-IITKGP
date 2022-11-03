//---------------------------------------------Metergauge1(Voltmeter)----------------------------------------------//
$(document).ready(function () {
    s1 = [0];
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 6,
                intervals: [0,2, 4, 6],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });
});

//---------------------------------------------Metergauge2(Ammeter)---------------------------------------------------//
$(document).ready(function () {
    s2 = [0];
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 4,
                intervals: [1, 2, 3, 4],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var r, rs, ic,vc;
var c=10e-6; // 2 kohm
var rtotal;
var tau,t;
var table, clmns, vlt;
var vcap , trc,ic;
var fq;
//-------------------------------------------------- Simulation----------------------------------------------------------------//
function freqChange() {
    fq = document.getElementById("fq").value; //sec
 
check();
    
}
function check() {

    r = document.getElementById("res").value; // in kilo ohm
   rs=r*Math.pow(10,3);
    tau=c*rs; //sec

    vc = document.getElementById("dc").value; // volt

trc=parseFloat(fq)/tau; 

vcap=vc*(1-Math.exp(-trc)); //voltage across capacitance

document.getElementById("volt").value=vcap.toPrecision(4);
ic=vc/(r*Math.exp(-trc)); //mAmp
i=vc/r;
document.getElementById("amp").value = ic.toPrecision(3); //Ammeter reading //
  



//}

    s1[0] = parseFloat(document.getElementById('volt').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
               min: 0,
                max: 6,
                intervals: [0,2, 4, 6],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });

    s2[0] = parseFloat(document.getElementById('amp').value);
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                 min: 0,
                max: 4,
                intervals: [1, 2, 3, 4],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    table = document.getElementById("mytable");


    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;

    if (vlt == document.getElementById("volt").value) {
    
        document.getElementById("demo").innerHTML = "Vary  DC voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }


}
    

