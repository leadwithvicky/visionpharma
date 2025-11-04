'use client';
import { useState, useEffect } from 'react';
import { User, Settings, Edit, Check, X, Camera, Lock } from 'lucide-react';
import useProfile from '@/hooks/useProfile';
import { formatDateTime } from '@/utils/formatDataTime';

export default function ProfilePage() {
  const { user } = useProfile();
  const [profile, setProfile] = useState({
    email: user?.email,
    name: user?.fullName,
    joinDate: formatDateTime(user?.createdAt, 'dd/MM/yyyy'),
    bio: 'Frontend developer passionate about creating beautiful interfaces',
    hasChangedName: false,
  });

  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(profile.name);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [newBio, setNewBio] = useState(profile.bio);

  const handleNameChange = () => {
    if (profile.hasChangedName) return;

    setProfile({
      ...profile,
      name: newName,
      hasChangedName: true,
    });
    setIsEditingName(false);
  };

  const handleBioChange = () => {
    setProfile({
      ...profile,
      bio: newBio,
    });
    setIsEditingBio(false);
  };

  return (
    <div className="min-h-screen bg-purple-100 p-4 md:p-8 text-purple-900 ">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Banner */}
        <div className="h-32 bg-gradient-to-r from-purple-600 to-orange-400"></div>

        {/* Profile Info Section */}
        <div className="px-6 py-4 relative">
          {/* Profile Avatar */}
          <div className="absolute -top-16 left-6 border-4 border-white rounded-full bg-purple-200 w-24 h-24 flex items-center justify-center">
            <User size={48} className="text-purple-700" />
            <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-1 rounded-full">
              <Camera size={16} />
            </button>
          </div>

          {/* Name Section */}
          <div className="mt-10 mb-4">
            {isEditingName ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="border border-purple-300 rounded px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleNameChange}
                  className="text-green-500 mr-2"
                >
                  <Check size={20} />
                </button>
                <button
                  onClick={() => {
                    setIsEditingName(false);
                    setNewName(profile.name);
                  }}
                  className="text-red-500"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                {!profile.hasChangedName && (
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="ml-2 text-orange-500"
                  >
                    <Edit size={16} />
                  </button>
                )}
                {profile.hasChangedName && (
                  <span className="ml-2 text-gray-500 flex items-center">
                    <Lock size={16} className="mr-1" />
                    <span className="text-xs">Name locked</span>
                  </span>
                )}
              </div>
            )}
            <p className="text-gray-500 text-sm">
              Member since {profile.joinDate}
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-4">
            <div className="flex items-center mb-1">
              <h3 className="font-semibold text-purple-800">Bio</h3>
              <button
                onClick={() => setIsEditingBio(true)}
                className="ml-2 text-orange-500"
              >
                <Edit size={16} />
              </button>
            </div>

            {isEditingBio ? (
              <div>
                <textarea
                  value={newBio}
                  onChange={(e) => setNewBio(e.target.value)}
                  className="w-full border border-purple-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleBioChange}
                    className="bg-purple-600 text-white px-3 py-1 rounded mr-2 text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setIsEditingBio(false);
                      setNewBio(profile.bio);
                    }}
                    className="bg-gray-300 px-3 py-1 rounded text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-700">{profile.bio}</p>
            )}
          </div>

          {/* Contact Info */}
          <div className="mb-4">
            <h3 className="font-semibold text-purple-800 mb-1">Contact</h3>
            <p className="text-gray-700">{profile.email}</p>
          </div>
        </div>

        {/* Settings Button */}
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="flex items-center text-purple-700 hover:text-purple-900">
            <Settings size={16} className="mr-1" />
            <span>Account Settings</span>
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <div className="max-w-xl mx-auto mt-4 bg-orange-100 border-l-4 border-orange-500 p-4 text-orange-800 text-sm">
        <p>
          <strong>Note:</strong> You can only change your name once. After
          changing, your name will be locked.
        </p>
      </div>
    </div>
  );
}
