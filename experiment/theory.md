# Theory


### Ohm's Law

1. The law states that the current through a conductor between two points is directly proportional to the voltage across the two points. Such a conductor is characterized by its ‘Resistance’ – R measured in Ohms.
2. V=I×R
- V is the Voltage in Volts across the conductor.
- I is the current in Amperes through the conductor.
- Voltage(V) is directly proportional to current i.e V=I×R.
- Resistance(R) in inversely proportional to current(I) i.e $$I=\frac{V}{R}$$

- Forward and reverse biased characteristics of a Silicon diode

**In forward biasing**, the positive terminal of battery is connected to the P side and the negative terminal of battery is connected to the N side of the diode. Diode will conduct in forward biasing because the forward biasing will decrease the depletion region width and overcome the barrier potential. In order to conduct, the forward biasing voltage should be greater than the barrier potential. During forward biasing the diode acts like a closed switch with a potential drop of nearly 0.6 V across it for a silicon diode. The forward and reverse bias characteristics of a silicon diode. From the graph, you may notice that the diode starts conducting when the forward bias voltage exceeds around 0.6 volts (for Si diode). This voltage is called cut-in voltage.


**In reverse biasing**, the positive terminal of battery is connected to the N side and the negative terminal of battery is connected to the P side of a diode. In reverse biasing, the diode does not conduct electricity, since reverse biasing leads to an increase in the depletion region width; hence current carrier charges find it more difficult to overcome the barrier potential. The diode will act like an open switch and there is no current flow.

### Diode Equation

In the forward-biased and reversed-biased regions, the current (I<sub>f</sub>), and the voltage (V<sub>f</sub>), of a semiconductor diode are related by the diode equation:

$$I_f= I_s(exp^\frac{v_f}{nV_T}-1)$$

where,
I<sub>s</sub> is reverse saturation current or leakage current,
I<sub>f</sub> is current through the diode(forward current),
V<sub>f</sub> is potential difference across the diode terminals(forward voltage)
V<sub>T</sub> is thermal voltage, given by

$$V_T=\frac{kT}{q}$$

and 

k is Boltzmann’s constant = 1.38x10<sup>−23</sup> J /°Kelvin.
q is the electronic charge = 1.6x10<sup>−19</sup> joules/volt(Coulombs).
T is the absolute temperature in °Kelvin(°K = 273 + temperature in °C).
At room temperature (25 °C), the thermal voltage is about 25.7 mV.
n is an empirical constant between 0.5 and 2.


## Assignments

1. A 3 volt battery sends a current of 1 ampere through a light bulb. What is the resistance of the filament of the bulb?
    [Ans:3Ω]


2.  Determine the value of R5 and current through it (IR5), if current through branch AB is zero and R1=1Ω,R2=1.5 Ω,R3=2Ω,R4=4Ω,VS=10 V.
[Ans:R5=6Ω and IR5=0.5 A]

<div align="center">
<img src="images/ohmsassgn1.png" width="30%">
<p>Figure 1  </p>
</div>

3. A 50Ω resistor is in parallel with 100Ω resistor. Current in 50Ω resistor is 7.2 A. How will you add a third resistor and what will be its value of the line-current is to be its value if the line-current is to be 12.1 amp ?
[Ans:Third resistance must be connected in parallel with 277Ω]

4. A resistor of 12 Ω is connected in series with a combination of 15 Ω and 20 Ω resistor in parallel. When a voltage of 120 V is applied across the whole circuit find the current taken from the supply.
[Ans:5 A ]

5. Three parallel connected resistors when connected across a d.c. voltage source dissipate a total power of 72 W. The total current drawn is 6 A, the current flowing through the first resistor is 3 A and the second and third resistors have equal value. What are the resistances of the three resistors ?
[Ans:4Ω, 8Ω, 8Ω ]

6. Calculate the voltage drop across the following electrical loads:
    1. The bulb that has 2.4 amperes flowing through it. The resistance of the bulb is 16 ohms.
[Ans:38.4V]

    2. A coffee grinder that has a resistance of 85 ohms and a current of 1.41 amperes flowing through it.
[Ans:119.85V]

     3. A current of 0.024 amperes flowing through a resistance of 750 ohms.
[Ans:18V]

7. A resistance of 10 Ω(R1) is connected in series with two resistances each of 15 Ω(R2 and R3) arranged in parallel. What resistance(R4) must be shunted across this parallel combination so that the total current taken shall be 1.5 A with 20 V applied ?
[Ans:R4=6Ω]

<div align="center">
<img src="images/ohmsassgn2.png" width="30%">
<p>Figure 2  </p>
</div>

8. Compute the relative potentials of points A, B, C, D and E which point A is grounded. Calculate the voltage drop across resistance R1? Does it affect the circuit operation or potential difference between any pair of points ?[where, R1=6Ω,R2=2 Ω,R3=4Ω,VS1=34 V,VS2=10 V,I=2 A].
[Ans:V=12 V]

<div align="center">
<img src="images/ohmsassgn3.png" width="30%">
<p>Figure 3  </p>
</div>


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>