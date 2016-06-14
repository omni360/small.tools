    public isInFOV(position: THREE.Vector3, camera: THREE.PerspectiveCamera): boolean {
        const projScreenMatrix = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
        const frustum = new THREE.Frustum().setFromMatrix(projScreenMatrix);
        const sphere = new THREE.Sphere(position, 0.001);
        return frustum.intersectsSphere(sphere);
    }
