
<template>
    <header>
        <div class="container">

            <div class="lead">Axio Vue Components</div>

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>

        </div>
    </header>

    <div class="container">
        <RouterView />
    </div>
</template>
