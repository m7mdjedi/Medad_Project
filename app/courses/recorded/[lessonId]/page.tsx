'use client';
import { Award, Book, BookMarked, Calendar, CheckCircle, FileText, Play, TestTube2, Video } from 'lucide-react'
import React from 'react'
import { useSearchParams } from 'next/navigation';
function page() {
    const searchParams = useSearchParams();
  const lessonParam = searchParams.get('lesson'); // تمرير درس مشفر JSON في URL مثلاً

  const lesson = lessonParam ? JSON.parse(lessonParam) : null;
  console.log('sdsdsdsdf',lesson);
  return (
    <main className="bg-white rounded-2xl shadow-lg border border-[#a8e3f0] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="bg-gradient-to-r from-[#a8e3f0] to-[#52c6e0] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-[#19383f]" />
            <span className="font-bold text-[#19383f] text-lg">FREE LESSON</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#19383f]">Lesson {lesson.lessonOrder}</span>
            <CheckCircle className="w-5 h-5 text-[#19383f]" />
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Lesson Title and Description */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{lesson.title}</h3>
          <p className="text-gray-600 mb-4">{lesson.description}</p>
        </div>

        {/* Lesson Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-[#f8fdff] rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm mb-1">
              <Calendar className="w-4 h-4 text-[#1f93ad]" />
              <span className="font-medium text-gray-600">Season</span>
            </div>
            <div className="font-bold text-[#19383f]">{lesson.season}</div>
          </div>
          
          <div className="bg-[#f8fdff] rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm mb-1">
              <BookMarked className="w-4 h-4 text-[#1f93ad]" />
              <span className="font-medium text-gray-600">Unit</span>
            </div>
            <div className="font-bold text-[#19383f]">{lesson.unit}</div>
          </div>
          <div className="bg-[#f8fdff] rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm mb-1">
              <FileText className="w-4 h-4 text-[#1f93ad]" />
              <span className="font-medium text-gray-600">Pages</span>
            </div>
            <div className="font-bold text-[#19383f]">{lesson.frompage}-{lesson.topage}</div>
          </div>
           <div className="bg-[#f8fdff] rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm mb-1">
              <Book className="w-4 h-4 text-[#1f93ad]" />
              <span className="font-medium text-gray-600">Book Type</span>
            </div>
            <div className="font-bold text-[#19383f]">
              {lesson.colored_book ? '🎨 Colored' : '📘 Standard'}
            </div>
          </div>
        </div>
        {/* Video Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-gray-700 flex items-center gap-2">
              <Video className="w-5 h-5 text-[#1f93ad]" href='https://www.youtube.com/watch?v=sackrQ9CTdw'/>
              Video Lesson
            </h4>
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              Full Access
            </span>
          </div>
          
          <div className="relative bg-gradient-to-br from-[#19383f] to-[#2a6d7a] rounded-xl overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors cursor-pointer">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-medium">Click to watch full lesson video</p>
            </div>
          </div>
        </div>
        {/* Test Section */}
        {lesson.test_lesson && (
          <div className="mb-6">
            <div className="bg-gradient-to-r from-[#f0f9ff] to-[#e8f7fa] rounded-xl p-4 border border-[#a8e3f0]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-[#19383f] flex items-center gap-2">
                  <TestTube2 className="w-5 h-5" />
                  Practice Test Included
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold bg-[#52c6e0] text-white px-2 py-1 rounded">
                    {lesson.test_lesson.questions.length} Questions
                  </span>
                  <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded">
                    {lesson.test_lesson.totalPoints} Points
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Test Duration:</span>
                  <span className="font-medium">{lesson.test_lesson.duration} minutes</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Passing Score:</span>
                  <span className="font-medium">{lesson.test_lesson.passingScore}%</span>
                </div>
                
                <div className="mt-3">
                  <h5 className="font-medium text-gray-700 mb-2">Sample Questions:</h5>
                  <div className="space-y-2">
                    {lesson.test_lesson.questions?.map((question: { question: string; type: string }, index: number) => (
                      <div key={index} className="bg-white rounded-lg p-3 border">
                        <p className="text-sm font-medium mb-1">{question.question}</p>
                        <p className="text-xs text-gray-500">{question.type}</p>
                      </div>
                    ))}
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        )}
        
      </div>
      
    </main>
  )
}

export default page