import * as THREE from 'three';

const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const loader = new THREE.FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            const textGeometry = new THREE.TextGeometry('Arthur', {
                font: font,
                size: 1,
                height: 0.5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelSegments: 5
            });
            const textMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);

            textMesh.position.set(-3, 0, 0); // Center the text
            scene.add(textMesh);

            // Add Animation
            const animate = function () {
                requestAnimationFrame(animate);
                textMesh.rotation.y += 0.01; // Rotate the text
                renderer.render(scene, camera);
            };

            animate();
        });

        // Add Light
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
        scene.add(ambientLight);

        // Camera Position
        camera.position.z = 5;

        // Handle Window Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });