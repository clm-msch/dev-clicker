<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
<div class="inline-flex flex-col space-y-4 items-start justify-end w-56 pl-2 pr-5 pt-5 pb-12 bg-white rounded-lg">
    <img class="w-28 h-28 rounded-lg" src="https://via.placeholder.com/119x119"/>
    <div class="flex flex-col space-y-11 items-start justify-start w-full py-2">
        <div class="flex flex-col space-y-6 items-start justify-start w-full">
            <p class="text-xl font-bold text-gray-800">Les bases :</p>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-1/6 pl-1 bg-purple-100 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-bold text-indigo-600">Code</p>
            </div>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-1/6 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Design</p>
            </div>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-1/6 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Missions</p>
            </div>
        </div>
        <div class="flex flex-col space-y-6 items-start justify-start w-full">
            <p class="text-xl font-bold text-gray-400">Senior :</p>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-1/6 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Coming Soon</p>
            </div>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-1/6 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Coming Soon</p>
            </div>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-1/6 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Coming Soon</p>
            </div>
        </div>
        <div class="flex flex-col space-y-6 items-start justify-start w-full">
            <p class="text-xl font-bold text-gray-800">Autres :</p>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-8 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Coming Soon</p>
            </div>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-8 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Coming Soon</p>
            </div>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-8 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Coming Soon</p>
            </div>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-8 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Coming Soon</p>
            </div>
            <div class="inline-flex space-x-2 items-center justify-start w-full h-8 pl-1 rounded">
                <img class="w-6 h-3/4 rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-xl font-semibold text-gray-400">Réglages</p>
            </div>
        </div>
    </div>
</div>
	<header>
		<nav>
			<ul>
				<li>
					<p>Junior :</p>
				</li>
				<li>
					<RouterLink to="/code">Code</RouterLink>
				</li>
				<li>
					<RouterLink to="/">Design</RouterLink>
				</li>
				<li>
					<RouterLink to="/">Missions</RouterLink>
				</li>
			</ul>
			<br />
			<ul>
				<li>
					<p>Senior :</p>
				</li>
				<li>
					<RouterLink to="/">Comming Soon</RouterLink>
				</li>
				<li>
					<RouterLink to="/">Comming Soon</RouterLink>
				</li>
				<li>
					<RouterLink to="/">Comming Soon</RouterLink>
				</li>
			</ul>
			<br />
			<ul>
				<li>
					<p>Autres :</p>
				</li>
				<li>
					<RouterLink to="/">Comming Soon</RouterLink>
				</li>
				<li>
					<RouterLink to="/">Comming Soon</RouterLink>
				</li>
				<li>
					<RouterLink to="/">Comming Soon</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
	<RouterView />
</template>


