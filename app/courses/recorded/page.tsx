"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  getAllFreeLessons,
  getPaidLessons,
  getAllLevels,
  getAllsubjects,
  getAllSubjectsByClassLevel
} from "@/models/recordedlessonsdata/functionsForfetchingData";
import {
  educationData,
  Lesson,
  ClassLevel,
  Subject,
} from "@/models/recordedlessonsdata/recoredeLessons";


export default function page() {
  const freeLessons = getAllFreeLessons();
  const paidLessons = getPaidLessons();
  const levels = getAllLevels();
  const subjects = getAllsubjects();
  const [selectedLessons, setselectedLessons] = useState<"free" | "all">("all");
  const [SelectedLevel, setSelectedLevel] = useState<string>("all");
  const [SelectedSubject, setSelectedSubject] = useState<string>("all");
  const [filtedLessons, setFiltedLessons] = useState<Lesson[]>([...freeLessons,...paidLessons]);
  const [availableSubjects, setAvailableSubjects] = useState<Subject[]>([]);
   //initial case for lessons when we enter to the page.
  useEffect(() => {
    console.log(selectedLessons,SelectedLevel,SelectedSubject)
    const lessons =
      selectedLessons === "free" ? freeLessons : [...freeLessons, ...paidLessons];
      // filter by level:
       let filter=lessons;
       if(SelectedLevel!=='all')
       {
        const level = educationData.find(l=>l.id===SelectedLevel);
        if(level){
          const levelLessonsIds=level.Subjects.flatMap(s=>s.lessons.map(l=>l.id));
          filter=filter.filter(lesson=>levelLessonsIds.includes(lesson.id));
          
        }
       }
       if(SelectedSubject!=='all')
       {
        filter = filter.filter(lesson => {
                        // Find which subject this lesson belongs to
                        for (const level of educationData) {
                            for (const subject of level.Subjects) {
                                if (subject.lessons.some(l => l.id === lesson.id) && subject.id === SelectedSubject) {
                                    return true;
                                     
                                }
                            }
                        }
                        return false;
                    });
       } 
      setFiltedLessons(filter);
  },[SelectedLevel,selectedLessons,SelectedSubject]);
  //, , , freeLessons, paidLessons
  // Update available subjects when we will choose a spicific level changes
 useEffect(() => {
        if (SelectedLevel === 'all') {
            
            setAvailableSubjects(subjects?subjects :[]);
        } else {
            const level = (getAllSubjectsByClassLevel(SelectedLevel))?getAllSubjectsByClassLevel(SelectedLevel):[];
            setAvailableSubjects(level?level:[]);
        }
      
    }, [SelectedLevel]);

  return (
<main className="min-h-screen bg-gradient-to-b from-gray-50 to-white  ">
<section className="mb-10 relative overflow-hidden">
     <div className="bg-[#248d86]  rounded-bl-[40px] rounded-br-[40px] shadow-2xl p-8 text-center relative z-10 border border-white/20 backdrop-blur-sm">
    
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400/10 rounded-full -translate-x-10 -translate-y-10"></div>
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-10 translate-y-10"></div>
    
    {/* Animated Icons */}
    <div className="absolute top-4 right-4 animate-bounce">
      <svg className="w-8 h-8 text-white/30" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
    
    <div className="absolute bottom-4 left-4 animate-pulse">
      <svg className="w-8 h-8 text-white/30" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>

    {/* Main Content */}
    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight relative z-10 drop-shadow-lg">
      Recorded Classes
      <div className="w-24 h-1.5 bg-[#fecf43] mx-auto mt-4 rounded-full"></div>
    </h1>
    
    <div className="relative inline-block mb-8 ">
      <div className="relative  bg-white/10 backdrop-blur-sm  rounded-[40px]  border border-white/20">
        <h2 className="text-xl md:text-2xl text-white font-semibold leading-relaxed italic px-10 py-20">
          "Every great achievement begins with the decision to try. Today is a fresh opportunity to expand your knowledge, sharpen your skills, and take one step closer to your goals. Stay focused, be curious, and remember that consistency is the key to success. Let's dive in and make this study session count!"
        </h2>
      </div>
    </div>

    {/* Interactive Element */}
    <div className="flex justify-center items-center gap-4 mt-6">
      <div className="flex items-center gap-2 text-white/80">
        <svg className="w-5 h-5 animate-ping text-[#fecf43]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
        </svg>
        <span className="font-medium">Ready to learn?</span>
      </div>
    </div>
    
  </div>
  </section>
    <section className="mb-10 bg-white rounded-2xl shadow-lg p-6">
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Levels Filter */}
      <section >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="flex items-center gap-2">
            {" "}
            <svg
              className="w-5 h-5 text-[#fecf43]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Filter by Level
          </span>
        </label>
        <select
          value={SelectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-[#9adfdb] focus:border-[#248d86] focus:ring-2 focus:ring-[#9adfdb] outline-none transition-all bg-white"
        >
          <option value="all">All Levels</option>
          {levels?.map((level) => (
            <option key={level.id} value={level.id}>
              {level.name}(Level {level.level})
            </option>
          ))}
        </select>
      </section>
      {/* subjects Filter */}
      <section >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#248d86]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>{" "}
            Filter by Subject{" "}
          </span>
        </label>
        <select
          value={SelectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}                                
          className="w-full px-4 py-3 rounded-xl border border-[#9adfdb] focus:border-[#248d86] focus:ring-2 focus:ring-[#9adfdb] outline-none transition-all bg-white"

        >
          <option value="all">All Subjects</option>
          {availableSubjects?.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>{" "}
      </section>
        {/* Reset Filters */}
      <div className="flex items-end">
        <button
          onClick={() => {
            setSelectedLevel("all");
            setSelectedSubject("all");
          }}                                
          className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"

        > <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
          Reset Filters
        </button>
      </div>
{/* Active Filters Display */}

  <section className="flex flex-wrap gap-2">
{(SelectedLevel!=='all') && (
    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#d7efed] text-[#248d86] text-sm font-medium rounded-full">
                                      Level: {levels?.find(l => l.id === SelectedLevel)?.name}
                                      <button
                                          onClick={() => setSelectedLevel('all')}
                                          className="text-[#abdedb] hover:text-[#ff0000] text-b"
                                      >
                                          ×
                                      </button>
                                  </span>
)}
 {SelectedSubject !== 'all' && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#eee7d3] text-[#7c7409] text-sm font-medium rounded-full">
                                    Subject: {subjects?.find(s => s.id === SelectedSubject)?.name}
                                    <button
                                        onClick={() => setSelectedSubject('all')}
                                       className="text-[#eee7d3] hover:text-[#ff0000] text-b"
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                          
  </section>



    </section>
    </section> 
    {/* {lessons cards} */}
     <section className="flex space-x-4 mb-10 border-b border-[#9adfdb]">
                    <button
                        onClick={() => setselectedLessons('free')}
                        className={`px-6 py-3 font-medium text-lg rounded-t-lg transition-all ${selectedLessons === 'free'
                            ? 'border-b-4 border-[#248d86] text-[#248d86] bg-[#ddeeed]'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Free Lessons ({freeLessons.length})
                        </span>
                    </button>
                    <button
                        onClick={() => setselectedLessons('all')}
                        className={`px-6 py-3 font-medium text-lg rounded-t-lg transition-all ${selectedLessons === 'all'
                            ? 'border-b-4 border-[#fdd040] text-[#877d3e] bg-[#edeade]'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            All Lessons ({freeLessons.length + paidLessons.length})
                        </span>
                    </button>
                </section>
<section className="mb-16 p-4"> 
   <div className="flex items-center justify-between mb-6">
                          <div>
                              <h2 className="text-2xl font-bold text-gray-900">
                                  {selectedLessons === 'free' ? 'Free Lessons' : 'All Lessons'}
                              </h2>
                              <p className="text-gray-600 text-sm mt-1">
                                  {filtedLessons.length} lessons found
                                  {SelectedLevel !== 'all' && ` in ${educationData.find(l => l.id === SelectedLevel)?.levelname}`}
                                  {SelectedSubject !== 'all' && ` for ${availableSubjects.find(s => s.id === SelectedSubject)?.name}`}
                              </p>
                          </div>
                      </div>
                      {/* {filtered lessons} */}
                     
 {(filtedLessons.length === 0 )? (
                        <div className="text-center py-12 bg-white rounded-2xl shadow">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-500 text-lg mb-4">No lessons found with the current filters.</p>
                            <button
                                onClick={() => {
                                    setSelectedLevel('all');
                                    setSelectedSubject('all');
                                }}
                                className="text-red-600 hover:text-red-800 font-medium"
                            >
                                Clear all filters
                            </button>
                        </div>
                        
                    )
                    :(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {
                        filtedLessons.map((lesson) => {
                                                        // Find which level and subject this lesson belongs to
                                                        let lessonLevel: ClassLevel | undefined;
                                                        let lessonSubject: Subject | undefined;
                        
                                                        for (const level of educationData) {
                                                            for (const subject of level.Subjects) {
                                                                if (subject.lessons.some(l => l.id === lesson.id)) {
                                                                    lessonLevel = level;
                                                                    lessonSubject = subject;
                                                                    break;
                                                                }
                                                            }
                                                            if (lessonLevel) break;
                                                        }
                          return(
                               <div
                                                                    key={lesson.id}
                                                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200  "
                                                                >
                                                                    {/* lesson info */}
                                                                  
                                                                    <div className={`relative h-48 ${lesson.pricing.isFree
                                                                                ? ' bg-gradient-to-r from-[#1895ad] via-[#a1d7e2] to-[#f1f1f2]' 
                                                                                : 'bg-gradient-to-r from-[#ad6b1f] via-[#e09e52] to-[#f0cea8]'}`}
                                                                    >
                                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="absolute top-4 left-4">
                                                                            <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full">
                                                                                {lessonLevel?.levelname}
                                                                            </span>
                                                                        </div>
                                                                        <div className="absolute top-4 right-4">
                                                                            {lesson.pricing.isFree ? (
                                                                                <span className="px-3 py-1 bg-[#0a945d] text-white text-sm font-semibold rounded-full shadow">
                                                                                    FREE
                                                                                </span>
                                                                            ) : (
                                                                                <span className="px-3 py-1 bg-[#d9263b] text-white text-sm font-semibold rounded-full shadow">
                                                                                    ${lesson.pricing.price}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                            
                                                                    {/* Lesson Content */}
                                                                    <div className="p-6">
                                                                        <div className="flex-col items-center gap-2">
                                                                            <h3 className={`font-semibold px-2 py-1  w-full   text-lg  rounded mb-2 ${lesson.pricing.isFree
                                                                                ? 'text-[#133f48]' 
                                                                                : '  text-[#936035]'
                                                                                }`}>
                                                                                {lesson?.title}
                                                                            </h3>
                                                                            <div className="flex flex-row space-x-2">
                                                                              <h2 className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded ">
                                                                                unit:{lesson.unit}
                                                                                
                                                                            </h2>
                                                                            <h2 className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded mb-2">
                                                                                season:{lesson.season}
                                                                                
                                                                            </h2>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                        {/* Pages Info */}
                                                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                                                            </svg>
                                                                            <span>Pages {lesson.frompage}-{lesson.topage}</span>
                                                                        </div>
                            
                                                                        {/* Test Available Badge */}
                                                                        {lesson.test_lesson && (
                                                                            <div className="mb-4">
                                                                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                                                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                                                                    </svg>
                                                                                    Quiz Available
                                                                                </span>
                                                                            </div>
                                                                        )}
                            
                                                                        {/* Action Button */}
                                                                        <Link
                                                                       
                                                                            href={{ pathname: `recorded/${lesson.id}`, query: { lesson: JSON.stringify(lesson) }}}
                                                                            className={`block font-semibold  w-full text-center py-3 rounded-xl font-medium transition-all ${lesson.pricing.isFree
                                                                                ? ' bg-gradient-to-r text-[#19383f] from-[#52c4e0] to-[#a8e1f0]  hover:from-[#1f91ad]  hover:to-[#52c4e0] hover:text-white' 
                                                                                : 'bg-gradient-to-r from-[#e09b52] to-[#f0cda8]  text-[#92590f] hover:from-[#ad681f] hover:to-[#e09b52] hover:text-white '
                                                                                }`}
                                                                        >
                                                                            {lesson.pricing.isFree ? 'Start Free Lesson' : 'View Details'}
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            );
                          
                        })
                      }
                        
                        
                        </div>) }
                            

</section>
    </main>
  ); 
}
