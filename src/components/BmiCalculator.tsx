import React, { useState } from 'react';
import { Calculator, AlertCircle, ArrowRight } from 'lucide-react';

interface BmiCalculatorProps {
  onConsultGoal?: (goal: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onConsultGoal }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [heightCm, setHeightCm] = useState<string>('175');
  const [weightKg, setWeightKg] = useState<string>('72');
  const [heightFt, setHeightFt] = useState<string>('5');
  const [heightIn, setHeightIn] = useState<string>('9');
  const [weightLbs, setWeightLbs] = useState<string>('160');
  const [age, setAge] = useState<string>('25');
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const calculateBmi = (): { bmi: number; category: string; color: string; advice: string } | null => {
    let hM = 0;
    let wKg = 0;

    if (unit === 'metric') {
      const h = parseFloat(heightCm);
      const w = parseFloat(weightKg);
      if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return null;
      hM = h / 100;
      wKg = w;
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inch = parseFloat(heightIn) || 0;
      const totalInches = ft * 12 + inch;
      const w = parseFloat(weightLbs);
      if (totalInches <= 0 || isNaN(w) || w <= 0) return null;
      hM = totalInches * 0.0254;
      wKg = w * 0.453592;
    }

    const bmiVal = wKg / (hM * hM);
    const rounded = Math.round(bmiVal * 10) / 10;

    if (rounded < 18.5) {
      return {
        bmi: rounded,
        category: "Underweight",
        color: "text-[#00AEEF]",
        advice: "Focus on caloric surplus and progressive hypertrophy strength training at TFR to build lean muscle density.",
      };
    } else if (rounded < 25) {
      return {
        bmi: rounded,
        category: "Normal / Healthy Weight",
        color: "text-[#C7FF00]",
        advice: "Optimal foundation! Maintain cardiovascular stamina and structured progressive strength training.",
      };
    } else if (rounded < 30) {
      return {
        bmi: rounded,
        category: "Overweight",
        color: "text-[#FFC400]",
        advice: "Incorporate targeted resistance workouts alongside metabolic conditioning to lower body fat and elevate lean mass.",
      };
    } else {
      return {
        bmi: rounded,
        category: "Obese Range",
        color: "text-red-400",
        advice: "A structured, guided low-impact fitness and strength routine can initiate significant health and stamina improvements.",
      };
    }
  };

  const result = calculateBmi();

  return (
    <section id="bmi" className="py-20 lg:py-24 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0F0F0F] border border-white/10 p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <Calculator className="w-4 h-4 text-[#C7FF00]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#C7FF00]">
                  FITNESS ASSESSMENT TOOL
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                BODY MASS INDEX (BMI) CALCULATOR
              </h2>
            </div>

            {/* Unit Toggle */}
            <div className="flex items-center p-1 bg-black rounded-xl border border-white/10 self-start sm:self-auto">
              <button
                onClick={() => setUnit('metric')}
                className={`px-3 py-1.5 text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer ${
                  unit === 'metric' ? 'bg-[#C7FF00] text-black shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Metric (cm/kg)
              </button>
              <button
                onClick={() => setUnit('imperial')}
                className={`px-3 py-1.5 text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer ${
                  unit === 'imperial' ? 'bg-[#C7FF00] text-black shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Imperial (ft/lbs)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Form (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Gender</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`py-2 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                        gender === 'male' ? 'bg-white/10 text-white border-[#FFC400]' : 'bg-[#181818] text-neutral-400 border-white/5'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`py-2 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                        gender === 'female' ? 'bg-white/10 text-white border-[#00AEEF]' : 'bg-[#181818] text-neutral-400 border-white/5'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                  />
                </div>
              </div>

              {unit === 'metric' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Height (cm)</label>
                    <input
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Weight (kg)</label>
                    <input
                      type="number"
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Feet</label>
                    <input
                      type="number"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Inches</label>
                    <input
                      type="number"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Weight (lbs)</label>
                    <input
                      type="number"
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2 pt-2 text-[11px] text-neutral-500">
                <AlertCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>Disclaimer: BMI is a general screening measure and is not a medical diagnosis.</span>
              </div>
            </div>

            {/* Result Display Box (5 cols) */}
            <div className="lg:col-span-5 bg-black/70 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block mb-1">
                  ESTIMATED BMI RESULT
                </span>

                {result ? (
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-5xl font-black text-white tabular-nums">
                        {result.bmi}
                      </span>
                      <span className="text-xs font-bold text-neutral-400">kg/m²</span>
                    </div>

                    <div className={`font-display text-xl font-bold uppercase tracking-wide mb-3 ${result.color}`}>
                      {result.category}
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                      {result.advice}
                    </p>
                  </div>
                ) : (
                  <div className="py-8 text-xs text-neutral-500">
                    Enter valid height and weight values to calculate your BMI.
                  </div>
                )}
              </div>

              {result && (
                <button
                  onClick={() => onConsultGoal && onConsultGoal(`BMI: ${result.bmi} (${result.category})`)}
                  className="w-full py-2.5 px-4 bg-[#C7FF00] hover:bg-[#d5ff33] text-black font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Discuss Plan With TFR</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
