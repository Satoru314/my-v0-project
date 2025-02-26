import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">木村 覚</h1>
          <p className="text-gray-600 dark:text-gray-300">WEBエンジニア・大学生</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="flex-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    {/* <AvatarImage src="/placeholder.svg?height=80&width=80" alt="木村覚" /> */}
                    <AvatarFallback>木村</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>プロフィール</CardTitle>
                    <CardDescription>かけだしWEB開発者</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  2005年生まれ。現在は大学生として学びながら、学生団体A4でweb開発を勉強中。
                </p>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>大阪府</span>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader>
                <CardTitle>作ったもの</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-500" />
                    <span>神戸大学授業レビュー閲覧サイト「えー授業」バックエンド（2025年）</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardContent>
            <Image src="/VRChat_2024-07-24_09-54-40.329_1920x1080.png" alt="説明文" width={1920} height={1080} />

            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>お問い合わせ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                お問い合わせは、以下のメールアドレスまでお願いします。
              </p>
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                satoru89k@gmail.com
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © 2025 木村 覚. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}