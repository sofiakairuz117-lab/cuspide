import React, { useState } from 'react';
import { ChevronLeft, Dumbbell, TrendingUp, Calendar, CheckCircle2, LogOut } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Logo({ className, invert = false }: { className?: string, invert?: boolean }) {
  return (
    <svg viewBox="0 0 200 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M 40 80 A 60 60 0 0 1 160 80 L 125 55 L 120 65 L 100 30 Z" 
        fill={invert ? "#FFFFFF" : "#4A4A4A"} 
      />
      <text 
        x="100" 
        y="115" 
        fontFamily="Inter, system-ui, sans-serif" 
        fontWeight="900" 
        fontSize="34" 
        letterSpacing="1"
        textAnchor="middle" 
        fill={invert ? "#FFFFFF" : "#5A8250"}
      >
        CÚSPIDE
      </text>
    </svg>
  );
}

type Page = 'login' | 'dashboard' | 'routine' | 'progress';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative flex flex-col">
        {currentPage === 'login' && <LoginPage onLogin={() => setCurrentPage('dashboard')} />}
        {currentPage === 'dashboard' && <DashboardPage onNavigate={setCurrentPage} />}
        {currentPage === 'routine' && <RoutinePage onBack={() => setCurrentPage('dashboard')} />}
        {currentPage === 'progress' && <ProgressPage onBack={() => setCurrentPage('dashboard')} />}
      </div>
    </div>
  );
}

function LoginPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex-1 flex flex-col justify-between px-8 py-12 bg-gradient-to-b from-[#0B3D2E] to-[#06281F] text-white">
      
      {/* Logo Section */}
      <div className="mt-16 text-center">
        <div className="animate-fade-up">
          <Logo className="w-44 mx-auto mb-4" invert={true} />
        </div>
        <p className="text-green-100/80 font-medium tracking-wide animate-fade-up delay-300">
          Train your peak
        </p>
      </div>

      {/* Form Section */}
      <div className="space-y-5 mb-10 animate-fade-up delay-500">
        <input 
          type="text" 
          placeholder="Nombre"
          className="w-full px-5 py-4 rounded-xl bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
        />
        
        <input 
          type="text" 
          placeholder="DNI"
          className="w-full px-5 py-4 rounded-xl bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
        />

        <button 
          onClick={onLogin}
          className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl tracking-wide shadow-lg hover:shadow-xl transition-all active:scale-[0.97]"
        >
          INGRESAR
        </button>
      </div>

    </div>
  );
}
   function DashboardPage({ onNavigate }) {
  return (
    <div className="bg-black min-h-screen text-white flex justify-center">

      <div className="w-[380px] p-6 space-y-6 pb-24">

        {/* HEADER */}
        <div className="flex justify-between items-center">

          <h1 className="text-2xl font-black tracking-widest text-green-400">
              CÚSPIDE
          </h1>

          <div className="flex gap-4 text-xl">
            <span>🔖</span>
            <span>🔍</span>
          </div>

        </div>


        {/* TABS */}
        <div className="flex gap-3">

          <button className="px-4 py-2 bg-zinc-800 rounded-full text-sm">
            ENTRENAMIENTOS
          </button>

          <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold">
            PLANES
          </button>

          <button className="px-4 py-2 bg-zinc-800 rounded-full text-sm">
            COMUNIDAD
          </button>

        </div>


        {/* DAYS PER WEEK */}
        <div>

          <h3 className="text-xs text-gray-400 mb-3 tracking-wider">
            DIAS 
          </h3>

          <div className="grid grid-cols-3 gap-3">

            <div className="bg-zinc-800 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-gray-400">Day</p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold">4</p>
              <p className="text-xs text-gray-400">Day</p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold">5</p>
              <p className="text-xs text-gray-400">Day</p>
            </div>

          </div>

        </div>


        {/* BY GOAL */}
        <div>

          <h3 className="text-xs text-gray-400 mb-3 tracking-wider">
            BY GOAL
          </h3>

          <div className="grid grid-cols-2 gap-4">


            {/* ATHLETICISM */}
            <div className="relative rounded-xl overflow-hidden">

              <img
                src="/athletic.jpg"
              className="w-full h-36 object-cover brightness-110"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <p className="absolute bottom-3 left-3 font-bold text-sm">
                ATHLETICISM
              </p>

            </div>


            {/* CONDITIONING */}
            <div className="relative rounded-xl overflow-hidden">

              <img
                src="/conditioning.jpg"
                className="w-full h-36 object-cover brightness-150"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <p className="absolute bottom-3 left-3 font-bold text-sm">
                CONDITIONING
              </p>

            </div>


            {/* STRENGTH */}
            <div className="relative rounded-xl overflow-hidden">

              <img
                src="/strength.jpg"
               className="w-full h-36 object-cover brightness-150"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <p className="absolute bottom-3 left-3 font-bold text-sm">
                STRENGTH
              </p>

            </div>


            {/* HIIT */}
            <div className="relative rounded-xl overflow-hidden">

              <img
                src="/hiit.jpg"
                className="w-full h-36 object-cover brightness-150"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <p className="absolute bottom-3 left-3 font-bold text-sm">
                HIIT
              </p>

            </div>

          </div>

        </div>


      </div>


      {/* NAVBAR */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[360px] bg-zinc-900 border border-zinc-800 rounded-2xl flex justify-around py-3 text-xs shadow-lg">

        <button className="flex flex-col items-center text-white">
          🧭
          <span>EXPLORE</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          ➕
          <span>CREATE</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          📊
          <span>PROGRESS</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          ⚙️
          <span>SETTINGS</span>
        </button>

      </div>

    </div>
  );
}


function RoutinePage({ onBack }: { onBack: () => void }) {
  const exercises = [
    { name: 'Dominadas', sets: '4', reps: '10' },
    { name: 'Remo con barra', sets: '4', reps: '12' },
    { name: 'Curl bíceps', sets: '3', reps: '12' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="bg-white px-4 pt-12 pb-4 flex items-center shadow-sm sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-500 hover:text-gray-900 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Rutina del Día</h1>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Espalda & Bíceps</h2>
          <p className="text-gray-500 mt-1">Día 3 • 45 min estimados</p>
        </div>

        <div className="space-y-4">
          {exercises.map((ex, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{ex.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{ex.sets} series × {ex.reps} reps</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 font-medium">{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-white border-t border-gray-100">
        <button 
          onClick={onBack}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98]"
        >
          Registrar entrenamiento
        </button>
      </div>
    </div>
  );
}

function ProgressPage({ onBack }: { onBack: () => void }) {
  const chartData = [
    { date: '01/10', weight: 80 },
    { date: '05/10', weight: 85 },
    { date: '12/10', weight: 90 },
    { date: '19/10', weight: 92.5 },
    { date: '26/10', weight: 95 },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="bg-white px-4 pt-12 pb-4 flex items-center shadow-sm sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-500 hover:text-gray-900 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Evolución</h1>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">PR Sentadilla</h2>
          <p className="text-gray-500 text-sm mt-1">Progresión de peso máximo (kg)</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 pt-6">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                  labelStyle={{ color: '#374151', fontWeight: 'bold', marginBottom: '4px' }}
                  itemStyle={{ color: '#16A34A', fontWeight: 'bold' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#16A34A" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#16A34A', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, fill: '#16A34A', strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-6 bg-green-50 rounded-2xl p-5 border border-green-100">
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-lg mr-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-green-900">¡Excelente progreso!</h3>
              <p className="text-sm text-green-800 mt-1">Has incrementado tu PR de sentadilla en 15kg durante este mes. Sigue así.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
