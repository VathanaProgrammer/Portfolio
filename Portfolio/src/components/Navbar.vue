<template>
    <header class="fixed top-0 left-0 right-0 z-50  px-5 md:px-20 lg:px-32 xl:px-64 flex flex-wrap items-center py-4">
        <div class="flex-1 flex justify-between items-center">
            <a href="#" class="text-4xl font-bold text-gray-800">Sieng <span class="text-[#2DA6FF]">Vathana</span></a>
        </div>

        <label for="menu-toggle" class="pointer-cursor md:hidden block">
        <svg class="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                    <li><a class="md:p-4 text-md font-semibold py-3 px-0 block" href="#">Portfolio</a></li>
                    <li><a class="md:p-4 text-md font-semibold py-3 px-0 block" href="#">Projects</a></li>
                    <li><a class="md:p-4 text-md font-semibold py-3 px-0 block" href="#">About me</a></li>
                    <li><a class="md:p-4 text-md font-semibold py-3 px-0 block md:mb-0 mb-2" href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>