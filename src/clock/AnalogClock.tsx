import React, { useEffect, useState } from "react";

export const GlassAnalogClock: React.FC = () => {
  const [angles, setAngles] = useState({ hour: 0, minute: 0, second: 0 });

  useEffect(() => {
    // Initial calculation base setup
    const now = new Date();
    const initSecs = now.getSeconds();
    const initMins = now.getMinutes();
    const initHours = now.getHours();

    // Set starting cumulative angles based on current time
    let cumulativeSecDeg = initSecs * 6;
    let cumulativeMinDeg = initMins * 6 + initSecs * 0.1;
    let cumulativeHourDeg = (initHours % 12) * 30 + initMins * 0.5;

    setAngles({
      second: cumulativeSecDeg,
      minute: cumulativeMinDeg,
      hour: cumulativeHourDeg
    });

    // Reference time tracker to figure out true differences
    let lastTime = now.getTime();

    const timer = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = (currentTime.getTime() - lastTime) / 1000; // time change in seconds
      lastTime = currentTime.getTime();

      // Add relative continuous progress angles to prevent the zero-snap reset
      cumulativeSecDeg += timeDiff * 6;          // 6 degrees per second
      cumulativeMinDeg += timeDiff * 0.1;        // 6 degrees per 60 seconds = 0.1
      cumulativeHourDeg += timeDiff * (1 / 120); // 30 degrees per 3600 seconds = 1/120

      setAngles({
        second: cumulativeSecDeg,
        minute: cumulativeMinDeg,
        hour: cumulativeHourDeg
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Generate 60 ticks for the perimeter layout
  const dialTicks = Array.from({ length: 60 }, (_, i) => i);
  
  // Format real-time string for the digital readout sub-display window
  const digitalTimeStr = new Date().toLocaleTimeString([], { 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit", 
    hour12: false 
  });

  return (
     <div 
      className="d-flex flex-column align-items-center justify-content-center rounded-circle"
      style={{
        background: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "15px",
        // padding: "20px",
        opacity: 0.9, // Stepped up from 0.8 slightly for premium readability
        // maxHeight: "400px",
        // width: "320px",
        border: "1px solid darkgoldenrod",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
        margin: "0 auto"
      }}
    >
      {/* Clock Face Panel Structure */}
      <div 
        className="position-relative d-flex align-items-center justify-content-center rounded-circle user-select-none"
        style={{ 
          width: "200px", 
          height: "200px",
          background: "linear-gradient(145deg, rgba(20, 20, 20, 0.6), rgba(5, 5, 5, 0.9))",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        {/* Center Pivot Pin Bolt */}
        <div 
          className="position-absolute rounded-circle shadow-sm"
          style={{ 
            width: "10px", 
            height: "10px", 
            zIndex: 40,
            backgroundColor: "darkgoldenrod",
            border: "2px solid #000"
          }}
        />

        {/* --- Dynamic Perimeter Dial Dots Layout --- */}
        {dialTicks.map((tick) => {
          const isMajorHour = tick % 15 === 0;
          const isFiveMinuteTrack = tick % 5 === 0;

          return (
            <div
              key={tick}
              className="position-absolute top-0 start-50 h-100 d-flex flex-column align-items-center"
              style={{
                width: "2px",
                transform: `translateX(-50%) rotate(${tick * 6}deg)`,
              }}
            >
              {!isMajorHour && (
                <div
                  style={{
                    marginTop: "10px",
                    width: isFiveMinuteTrack ? "2px" : "3px",
                    height: isFiveMinuteTrack ? "6px" : "3px",
                    backgroundColor: isFiveMinuteTrack ? "darkgoldenrod" : "rgba(255, 255, 255, 0.2)",
                    borderRadius: isFiveMinuteTrack ? "0px" : "50%",
                    opacity: isFiveMinuteTrack ? 0.8 : 0.5
                  }}
                />
              )}
            </div>
          );
        })}

        {/* --- Luxury Hour Numbers --- */}
        <span className="position-absolute top-0 pt-3 fw-bold text-warning" style={{ fontSize: "14px", letterSpacing: "0.5px", zIndex: 10 }}>12</span>
        <span className="position-absolute end-0 pe-3 fw-bold text-warning" style={{ fontSize: "14px", zIndex: 10 }}>3</span>
        <span className="position-absolute bottom-0 pb-3 fw-bold text-warning" style={{ fontSize: "14px", zIndex: 10 }}>6</span>
        <span className="position-absolute start-0 ps-3 fw-bold text-warning" style={{ fontSize: "14px", zIndex: 10 }}>9</span>

        {/* --- Embedded Middle Bottom Digital Readout --- */}
        <div 
          className="position-absolute start-50 translate-middle-x px-2 py-1 bg-dark text-warning font-monospace rounded border border-1 border-warning text-center shadow-inner"
          style={{ 
            bottom: "45px",
            fontSize: "12px", 
            letterSpacing: "2px",
            zIndex: 15,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            borderColor: "rgba(255, 255, 255, 0.15)"
          }}
        >
          {digitalTimeStr}
        </div>

        {/* --- Clock Hands --- */}
        
        {/* Hour Hand */}
        <div
          className="position-absolute bottom-50 start-50 rounded-pill"
          style={{
            width: "5px",
            height: "55px",
            backgroundColor: "#ffffff",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${angles.hour}deg)`,
            transition: "transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 1)",
            zIndex: 20,
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}
        />

        {/* Minute Hand */}
        <div
          className="position-absolute bottom-50 start-50 rounded-pill"
          style={{
            width: "3px",
            height: "68px",
            backgroundColor: "#ffffff",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${angles.minute}deg)`,
            transition: "transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 1)",
            zIndex: 25,
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}
        />

        {/* Second Hand (Continuous tracking alignment) */}
        <div
          className="position-absolute bottom-50 start-50 rounded-pill"
          style={{
            width: "1.5px",
            height: "88px",
            // backgroundColor: "darkgoldenrod",
             backgroundColor: "hsla(0, 97%, 49%, 0.97)",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${angles.second}deg)`,
            transition: "transform 0.1s linear",
            zIndex: 30
          }}
        />
        
        {/* Second Hand Extension/Counterweight Tail */}
        <div
          className="position-absolute top-50 start-50"
          style={{
            width: "1.5px",
            height: "14px",
            backgroundColor: "darkgoldenrod",
            transformOrigin: "top center",
            transform: `translateX(-50%) rotate(${angles.second}deg)`,
            transition: "transform 0.1s linear",
            zIndex: 30
          }}
        />
      </div>
    </div>
  );
};