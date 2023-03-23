-- CreateTable
CREATE TABLE "Curation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "subName" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "Curation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Music" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "youtubeUrl" TEXT NOT NULL,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurationMusicMapping" (
    "id" SERIAL NOT NULL,
    "curationId" INTEGER NOT NULL,
    "musicId" INTEGER NOT NULL,
    "detailText" TEXT NOT NULL,

    CONSTRAINT "CurationMusicMapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiaryBook" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "DiaryBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diary" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "diaryBookId" INTEGER NOT NULL,

    CONSTRAINT "Diary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programming" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "Programming_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Travel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "Travel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CurationMusicMapping" ADD CONSTRAINT "CurationMusicMapping_curationId_fkey" FOREIGN KEY ("curationId") REFERENCES "Curation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CurationMusicMapping" ADD CONSTRAINT "CurationMusicMapping_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diary" ADD CONSTRAINT "Diary_diaryBookId_fkey" FOREIGN KEY ("diaryBookId") REFERENCES "DiaryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
